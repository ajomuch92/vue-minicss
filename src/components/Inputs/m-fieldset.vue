<template>
  <fieldset>
    <legend>{{legend}}</legend>
    <slot name="default"></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'm-fieldset',
  props: {
    legend: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  fieldset {
    display: flex;
    flex-direction: column;
  }

</style>