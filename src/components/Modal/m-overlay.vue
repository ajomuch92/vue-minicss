<template>
  <div v-show="value" class="overlay">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-overlay',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>