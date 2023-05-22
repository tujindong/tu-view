<template>
  <div
    class="tu-card"
    :class="[
      shadow ? `tu-card-shadow--${shadow}` : '',
      size ? `tu-card--${size}` : '',
    ]"
  >
    <div class="tu-card__header" v-if="$slots.title || title">
      <div class="tu-card__header-title">
        <template v-if="title">{{ title }}</template>
        <slot name="title"></slot>
      </div>
      <div class="tu-card__header-extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="tu-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuCard",

  props: {
    title: {},
    bodyStyle: {},
    size: String,
    shadow: {},
  },
};
</script>
