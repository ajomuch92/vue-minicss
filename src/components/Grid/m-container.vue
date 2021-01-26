<template>
  <div class="container">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-container'
}
</script>

<style lang="scss">
  .flex {
    display: flex;
  }

  .flex-reverse {
    flex-direction: row-reverse;
  }

  .flex-column {
    flex-direction: column;
  }
</style>