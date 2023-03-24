<template>
  <div class="tu-empty">
    <div class="tu-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <component :is="iconElement" :class="iconElement" />
      </slot>
    </div>
    <div class="tu-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="tu-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import IconEmpty from "./icon-empty.vue";
import Icon404 from "./icon-404.vue";
import IconCollectEmpty from "./icon-collect-empty.vue";
import IconConnectFail from "./icon-connect-failed.vue";
import IconListEmpty from "./icon-list-empty.vue";
import IconLoadFailed from "./icon-load-failed.vue";
import IconMessageEmpty from "./icon-message-empty.vue";
import IconSearchEmpty from "./icon-search-empty.vue";
import { t } from "@packages/src/locale";

const IconMap = {
  empty: "icon-empty",
  404: "icon-404",
  "collect-empty": "icon-collect-empty",
  "connect-failed": "icon-connect-failed",
  "list-empty": "icon-list-empty",
  "load-failed": "icon-load-failed",
  "message-empty": "icon-message-empty",
  "search-empty": "icon-search-empty",
};

export default {
  name: "TuEmpty",

  components: {
    [IconEmpty.name]: IconEmpty,
    [Icon404.name]: Icon404,
    [IconCollectEmpty.name]: IconCollectEmpty,
    [IconConnectFail.name]: IconConnectFail,
    [IconListEmpty.name]: IconListEmpty,
    [IconLoadFailed.name]: IconLoadFailed,
    [IconMessageEmpty.name]: IconMessageEmpty,
    [IconSearchEmpty.name]: IconSearchEmpty,
  },

  props: {
    icon: {
      type: String,
      default: "empty",
    },
    image: {
      type: String,
      default: "",
    },
    imageSize: Number,
    description: {
      type: String,
      default: "",
    },
  },

  computed: {
    emptyDescription() {
      return this.description || t("tu.empty.description");
    },
    imageStyle() {
      return {
        width: this.imageSize ? `${this.imageSize}px` : "",
      };
    },
    iconElement() {
      const icon = this.icon;
      return icon && IconMap[icon] ? IconMap[icon] : "icon-empty";
    },
  },
};
</script>

<style></style>
