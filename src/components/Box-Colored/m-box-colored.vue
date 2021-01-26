<template>
  <div class="box-colored">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-box-colored'
}
</script>

<style lang="scss" scoped>
  .box-colored {
    background: #0277bd;
    border-radius: 0.125rem;
    padding: 0.875rem;
    margin-bottom: 0.5rem;
    min-height: 0.875rem;
    color: #f8f8f8;
  }
</style>