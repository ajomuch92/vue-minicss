<template>
  <span>
    <label :for="id" class="drawer-toggle" :class="{'persistent': persistent}"></label>
    <input type="checkbox" :id="id" class="drawer" :class="{'persistent': persistent}">
    <div>
      <label :for="id" class="drawer-close"></label>
      <div class="m-drawer-body">
        <slot name="default"/>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'm-drawer',
  props: {
    id: {
      type: String,
      required: true
    },
    persistent: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style lang="scss" scoped>
  .m-drawer-body {
    padding: 10px;
  }
</style>