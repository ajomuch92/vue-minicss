<template>
  <footer :class="isSticky">
    <slot name="default"></slot>
  </footer>
</template>

<script>
export default {
  name: 'm-footer',
  props: {
    sticky: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    isSticky(){
      return this.sticky? 'sticky': '';
    }
  }
}
</script>

<style>

</style>