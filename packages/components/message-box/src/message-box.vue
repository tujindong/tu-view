<template>
  <transition name="msgbox-fade">
    <div
      class="tu-message-box__wrapper"
      tabindex="-1"
      v-show="visible"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'"
      ref="messageboxWrapper"
    >
      <div
        class="tu-message-box"
        :class="[customClass, center && 'tu-message-box--center']"
        ref="messagebox"
      >
        <div class="tu-message-box__header" v-if="title !== null">
          <div class="tu-message-box__title">
            <div
              v-if="icon && center"
              :class="['tu-message-box__status', icon]"
            ></div>
            <span>{{ title }}</span>
          </div>
          <button
            type="button"
            class="tu-message-box__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="
              handleAction(distinguishCancelAndClose ? 'close' : 'cancel')
            "
            @keydown.enter="
              handleAction(distinguishCancelAndClose ? 'close' : 'cancel')
            "
          >
            <i class="tu-message-box__close tu-icon-close"></i>
          </button>
        </div>
        <div class="tu-message-box__content">
          <div class="tu-message-box__container">
            <div
              :class="['tu-message-box__status', `tu-icon__${type}`, icon]"
              v-if="icon && !center && message !== ''"
            ></div>
            <div class="tu-message-box__message" v-if="message !== ''">
              <slot>
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </slot>
            </div>
          </div>
          <div class="tu-message-box__input" v-show="showInput">
            <tu-input
              v-model="inputValue"
              :type="inputType"
              @keydown.enter.native="handleInputEnter"
              :placeholder="inputPlaceholder"
              ref="input"
            ></tu-input>
            <div
              class="tu-message-box__errormsg"
              :style="{
                visibility: !!editorErrorMessage ? 'visible' : 'hidden',
              }"
            >
              {{ editorErrorMessage }}
            </div>
          </div>
        </div>
        <div class="tu-message-box__btns">
          <tu-button
            :loading="cancelButtonLoading"
            :class="[cancelButtonClasses]"
            v-if="showCancelButton"
            :round="roundButton"
            size="small"
            @click.native="handleAction('cancel')"
            @keydown.enter="handleAction('cancel')"
          >
            {{ cancelButtonText || t("tu.messagebox.cancel") }}
          </tu-button>
          <tu-button
            :loading="confirmButtonLoading"
            ref="confirm"
            :class="[confirmButtonClasses]"
            v-show="showConfirmButton"
            :round="roundButton"
            size="small"
            @click.native="handleAction('confirm')"
            @keydown.enter="handleAction('confirm')"
          >
            {{ confirmButtonText || t("tu.messagebox.confirm") }}
          </tu-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TuInput from "@packages/components/input";
import TuButton from "@packages/components/button";
import Popup from "@packages/src/utils/popup";
import Locale from "@packages/src/mixins/locale";
import { addClass, removeClass } from "@packages/src/utils/dom";
import { t } from "@packages/src/locale";
import Dialog from "@packages/src/utils/aria-dialog";

let messageBox;
let typeMap = {
  success: "check-circle-fill",
  info: "info-circle-fill",
  warning: "warning-circle-fill",
  error: "close-circle-fill",
};

export default {
  name: "TuMessageBox",

  mixins: [Popup, Locale],

  components: { TuInput, TuButton },

  props: {
    modal: {
      default: true,
    },
    lockScroll: {
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      default: true,
    },
    closeOnPressEscape: {
      default: true,
    },
    closeOnHashChange: {
      default: true,
    },
    center: {
      default: false,
      type: Boolean,
    },
    roundButton: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      uid: 1,
      title: undefined,
      message: "",
      type: "",
      iconClass: "",
      customClass: "",
      showInput: false,
      inputValue: null,
      inputPlaceholder: "",
      inputType: "text",
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: "",
      showConfirmButton: true,
      showCancelButton: false,
      action: "",
      confirmButtonText: "",
      cancelButtonText: "",
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: "",
      confirmButtonDisabled: false,
      cancelButtonClass: "",
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false,
      distinguishCancelAndClose: false,
    };
  },

  computed: {
    icon() {
      const { type, iconClass } = this;
      return (
        iconClass || (type && typeMap[type] ? `tu-icon-${typeMap[type]}` : "")
      );
    },

    confirmButtonClasses() {
      return `tu-button--primary ${this.confirmButtonClass}`;
    },

    cancelButtonClasses() {
      return `${this.cancelButtonClass}`;
    },
  },

  watch: {
    inputValue: {
      immediate: true,
      handler(val) {
        this.$nextTick((_) => {
          if (this.$type === "prompt" && val !== null) {
            this.validate();
          }
        });
      },
    },

    visible(val) {
      if (val) {
        this.uid++;
        this.focusAfterClosed = document.activeElement;
        messageBox = new Dialog(
          this.$el,
          this.focusAfterClosed,
          this.getFirstFocus()
        );
      }

      if (this.$type !== "prompt") return;
      if (!val) {
        this.editorErrorMessage = "";
        removeClass(this.getInputElement(), "invalid");
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      if (this.closeOnHashChange) {
        window.addEventListener("hashchange", this.close);
      }
    });
  },

  beforeDestroy() {
    if (this.closeOnHashChange) {
      window.removeEventListener("hashchange", this.close);
    }
    setTimeout(() => {
      messageBox.closeDialog();
    });
  },

  methods: {
    getSafeClose() {
      const currentId = this.uid;
      return () => {
        this.$nextTick(() => {
          if (currentId === this.uid) this.doClose();
        });
      };
    },

    doClose() {
      if (!this.visible) return;
      this.visible = false;
      this._closing = true;

      this.onClose && this.onClose();
      messageBox.closeDialog(); // 解绑
      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }
      this.opened = false;
      this.doAfterClose();
      setTimeout(() => {
        if (this.action) this.callback(this.action, this);
      });
    },

    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction(this.distinguishCancelAndClose ? "close" : "cancel");
      }
    },

    handleInputEnter() {
      if (this.inputType !== "textarea") {
        return this.handleAction("confirm");
      }
    },

    handleAction(action) {
      if (this.$type === "prompt" && action === "confirm" && !this.validate()) {
        return;
      }
      this.action = action;
      if (typeof this.beforeClose === "function") {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },

    validate() {
      if (this.$type === "prompt") {
        const inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || "")) {
          this.editorErrorMessage =
            this.inputErrorMessage || t("tu.messagebox.error");
          addClass(this.getInputElement(), "invalid");
          return false;
        }
        const inputValidator = this.inputValidator;
        if (typeof inputValidator === "function") {
          const validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            this.editorErrorMessage =
              this.inputErrorMessage || t("tu.messagebox.error");
            addClass(this.getInputElement(), "invalid");
            return false;
          }
          if (typeof validateResult === "string") {
            this.editorErrorMessage = validateResult;
            addClass(this.getInputElement(), "invalid");
            return false;
          }
        }
      }
      this.editorErrorMessage = "";
      removeClass(this.getInputElement(), "invalid");
      return true;
    },

    getFirstFocus() {
      const btn = this.$el.querySelector(".tu-message-box__btns .tu-button");
      const title = this.$el.querySelector(
        ".tu-message-box__btns .tu-message-box__title"
      );
      return btn || title;
    },

    getInputElement() {
      const inputRefs = this.$refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    },

    handleClose() {
      this.handleAction("close");
    },
  },
};
</script>
