<template>
  <mark :class="getClass">
    <slot name="default"></slot>
  </mark>
</template>

<script>
import MixinColor from '../../mixins/mixin-color';
export default {
  name: 'm-highlight',
  props: {
    tag: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    }
  },
  mixins: [MixinColor],
  computed: {
    getClass() {
      let className = `${this.color} `;
      if(this.tag)
        className += 'tag ';
      if(this.inline)
        className += 'inline-block';
      return className.trim();
    }
  }
}
</script>

<style>

</style>