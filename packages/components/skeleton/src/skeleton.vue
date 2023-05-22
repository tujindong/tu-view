<template>
  <div>
    <template v-if="uiLoading">
      <div
        :class="['tu-skeleton', animated ? 'is-animated' : '']"
        v-bind="$attrs"
      >
        <template v-for="i in count">
          <slot v-if="loading" name="template">
            <tu-skeleton-item
              v-for="item in rows"
              :key="`${i}-${item}`"
              :class="{
                'tu-skeleton__paragraph': item !== 1,
                'is-first': item === 1,
                'is-last': item === rows && rows > 1,
              }"
              variant="p"
            />
          </slot>
        </template>
      </div>
    </template>
    <template v-else>
      <slot v-bind="$attrs"></slot>
    </template>
  </div>
</template>

<script>
import TuSkeletonItem from "@packages/components/skeleton-item";
export default {
  name: "TuSkeleton",

  components: { TuSkeletonItem },

  props: {
    animated: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 1,
    },
    rows: {
      type: Number,
      default: 4,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    throttle: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      uiLoading: this.throttle <= 0 ? this.loading : false,
    };
  },

  watch: {
    loading: {
      handler(loading) {
        if (this.throttle <= 0) {
          this.uiLoading = loading;
          return;
        }
        if (loading) {
          clearTimeout(this.timeoutHandle);
          this.timeoutHandle = setTimeout(() => {
            this.uiLoading = this.loading;
          }, this.throttle);
        } else {
          this.uiLoading = loading;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
