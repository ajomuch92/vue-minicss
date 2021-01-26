<template>
  <transition name="fade">
    <m-overlay :value="value">
      <div class="card modal shadowed">
        <div class="section">
          <span>
            <slot name="header"></slot>
          </span>
          <button class="close-modal small" @click="$emit('input',false)"></button>
        </div>
        <div class="modal-body">
          <slot name="default"></slot>
        </div>
      </div>
    </m-overlay>
  </transition>
</template>

<script>
import MOverlay from './m-overlay';

export default {
  name: 'm-modal',
  components: { 
    MOverlay
   },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 600px) {
    .modal {
      width: 85%;
    }
  }

  @media only screen and (min-width: 600px) {
    .modal {
      width: 60%;
    }
  }

  @media only screen and (min-width: 768px) {
    .modal {
      width: 60%;
    }
  }

  @media only screen and (min-width: 992px) {
    .modal {
      width: 30%;
    }
  }

  .section {
    display: flex;
    justify-content: space-between;
    padding: 4px !important;
  }

  .close-modal::before {
    display: block;
    content: '\00D7';
    color: var(--modal-close-color);
    position: relative;
    font-family: sans-serif;
    font-size: 1.75rem;
    line-height: 1;
    text-align: center;
  }
</style>