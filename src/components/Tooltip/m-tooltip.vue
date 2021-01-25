<template>
  <span class="tooltip" :class="{'bottom': bottom}" :aria-label="tooltipText">
    <slot name="default"></slot>
  </span>
</template>

<script>
export default {
  name: 'm-tooltip',
  props: {
    tooltipText: {
      type: String,
      required: true,
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>

</style>