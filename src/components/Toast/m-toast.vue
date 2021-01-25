<template>
  <transition name="fade">
    <span v-show="value" class="toast">
      <slot name="default"></slot>
    </span>
  </transition>
</template>

<script>
export default {
  name: 'm-toast',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 2500
    }
  },
  watch: {
    value() {
      if(this.value) {
        setTimeout(() => {
          this.$emit('input', false);
        }, this.timeout)
      }
    }
  }
}
</script>

<style scoped>
  .toast {
    min-width: 250px;
    text-align: center;
    position: fixed;
    z-index: 10;
    bottom: 30px;
  }

  .fade-enter-active {
    animation: fade-in .5s;
  }
  .fade-leave-active {
    animation: fade-in .5s reverse;
  }

  @keyframes fade-in {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
</style>