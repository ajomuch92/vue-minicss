<template>
  <transition name="fade">
    <m-overlay :value="show">
      <div class="card rounded shadowed loading">
        <div class="spinner"></div>
        <slot name="default"></slot>
      </div>
    </m-overlay>
  </transition>
</template>

<script>
import MOverlay from './m-overlay';

export default {
  name: 'loading',
  components: {
    MOverlay,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    .loading {
      width: 80%;
    }
  }

  @media only screen and (min-width: 600px) {
    .loading {
      width: 40%;
    }
  }

  @media only screen and (min-width: 768px) {
    .loading {
      width: 40%;
    }
  }

  @media only screen and (min-width: 992px) {
    .loading {
      width: 10%;
    }
  }

  .spinner {
    width: 1.5rem;
    height: 1.5rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>