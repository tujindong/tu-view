<template>
  <transition-group
    tag="ul"
    :class="[
      'tu-upload-list',
      'tu-upload-list--' + listType,
      { 'is-disabled': disabled },
    ]"
    name="tu-list"
  >
    <li
      v-for="file in files"
      :class="[
        'tu-upload-list__item',
        'is-' + file.status,
        focusing ? 'focusing' : '',
      ]"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="tu-upload-list__item-thumbnail"
          v-if="
            file.status !== 'uploading' &&
            ['picture-card', 'picture'].indexOf(listType) > -1
          "
          :src="file.url"
          alt=""
        />
        <span
          v-if="listType !== 'picture-card'"
          class="tu-upload-list__item-empty"
        >
          <i class="tu-icon-file-unknown"></i>
        </span>
        <a class="tu-upload-list__item-name" @click="handleClick(file)">
          {{ file.name }}
        </a>
        <label class="tu-upload-list__item-status-label">
          <i
            :class="{
              'tu-icon-upload-success': true,
              'tu-icon-check-circle':
                listType === 'text' || listType === 'picture',
              'tu-icon-check': ['picture-card'].indexOf(listType) > -1,
            }"
          ></i>
        </label>
        <i
          class="tu-icon-close"
          v-if="!disabled"
          @click="$emit('remove', file)"
        ></i>
        <tu-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="strokeWidth"
          :percentage="parsePercentage(file.percentage)"
        >
        </tu-progress>

        <span
          class="tu-upload-list__item-actions"
          v-if="listType === 'picture-card'"
        >
          <span
            class="tu-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="tu-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="tu-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="tu-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import Locale from "@packages/src/mixins/locale";

export default {
  name: "TuUploadList",

  mixins: [Locale],

  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: Function,
    listType: String,
  },

  data() {
    return {
      focusing: false,
    };
  },

  components: {},

  computed: {
    strokeWidth() {
      return this.listType === "picture-card"
        ? 6
        : this.listType === "picture"
        ? 80
        : 32;
    },
  },

  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },

    handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    },
  },
};
</script>
