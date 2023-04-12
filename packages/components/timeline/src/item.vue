<template>
  <li class="tu-timeline-item">
    <div class="tu-timeline-item__tail"></div>

    <div
      v-if="!$slots.dot"
      class="tu-timeline-item__node"
      :class="[
        `tu-timeline-item__node--${size || ''}`,
        `tu-timeline-item__node--${type || ''}`,
      ]"
      :style="{
        backgroundColor: color,
      }"
    >
      <tu-icon
        v-if="icon"
        class="tu-timeline-item__icon"
        :name="icon"
      ></tu-icon>
    </div>
    <div v-if="$slots.dot" class="tu-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="tu-timeline-item__wrapper">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        class="tu-timeline-item__timestamp is-top"
      >
        {{ timestamp }}
      </div>

      <div class="tu-timeline-item__content">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        class="tu-timeline-item__timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script>
import TuIcon from "@packages/components/icon";
export default {
  name: "TuTimelineItem",

  inject: ["timeline"],

  components: { TuIcon },

  props: {
    timestamp: String,

    hideTimestamp: {
      type: Boolean,
      default: false,
    },

    placement: {
      type: String,
      default: "bottom",
    },

    type: String,

    color: String,

    size: {
      type: String,
      default: "normal",
    },

    icon: String,
  },
};
</script>
