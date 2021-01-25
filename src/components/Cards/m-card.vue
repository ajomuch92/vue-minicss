<template>
  <div class="card" :class="getClass">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-card',
  props: {
    size: {
      type: String,
      default: 'large',
      validator: (value) => {
        return ['large', 'small'].indexOf(value) !== -1
      }
    },
    fluid: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: '',
      validator: (value) => {
        return ['error', 'warning', ''].indexOf(value) !== -1
      }
    }
  },
  computed: {
    getClass() {
      let className = `${this.size} `;
      if(this.fluid)
        className += 'fluid ';
      if(this.variant)
        className += `${this.variant}`;
      return className.trim();
    }
  }
}
</script>

<style>

</style>