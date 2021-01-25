<template>
  <span>
    <label :for="id" class="drawer-toggle" :class="{'persistent': persistent}"></label>
    <input type="checkbox" :id="id" class="drawer" :class="{'persistent': persistent}">
    <div>
      <label :for="id" class="drawer-close"></label>
      <slot name="default"/>
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

<style>

</style>