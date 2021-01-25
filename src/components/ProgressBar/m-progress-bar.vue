<template>
  <progress :class="color" :value="value" :max="max"></progress>
</template>

<script>
import MixinColor from '../../mixins/mixin-color';
export default {
  name: 'm-progress-bar',
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    },
  },
  mixins: [MixinColor]
}
</script>

<style>

</style>