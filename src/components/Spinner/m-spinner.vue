<template>
  <div class="spinner" :class="color"></div>
</template>

<script>
import MixinColor from '../../mixins/mixin-color';
export default {
  name: 'm-spinner',
  mixins: [MixinColor]
}
</script>

<style scoped>

</style>