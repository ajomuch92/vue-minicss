<template>
  <div class="m-spacer">
    <slot name="default"/>
  </div>
</template>

<script>
export default {
  name: 'm-spacer'
}
</script>

<style lang="scss" scoped>
  .m-spacer {
    flex-grow: 1 !important;
  }
</style>