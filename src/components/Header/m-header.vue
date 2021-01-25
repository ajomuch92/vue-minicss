<template>
  <header :class="isSticky">
    <span class="logo">
      <slot name="logo"></slot>
    </span>
    <slot name="default"></slot>
  </header>
</template>

<script>
export default {
  name: 'm-header',
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