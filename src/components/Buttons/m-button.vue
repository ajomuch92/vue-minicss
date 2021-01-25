<template>
  <button ref="button" :class="getClass" @click="clickHandler" :style="getStyle" :disabled="disabled">
    <span v-if="!loading">
      <slot name="default"></slot>
    </span>
    <mSpinner class="m-button-spinner" v-else />
  </button>
</template>

<script>
import MixinColor from '../../mixins/mixin-color';
import mSpinner from '../Spinner/m-spinner';
export default {
  name: 'm-button',
  mixins: [MixinColor],
  components: {
    mSpinner
  },
  props: {
    inverse: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '',
      validator: (value) => {
        return ['small', 'large', ''].indexOf(value) !== -1
      }
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    shadowed: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 75
    }
    // confetti: {
    //   type: Boolean,
    //   default: false
    // },
  },
  computed: {
    getClass() {
      let className = '';
      if(this.size) 
        className += this.size + ' ';
      if(this.inverse)
        className += 'inverse ';
      if(this.hoverEffect && !this.disabled)
        className += 'm-button ';
      if(this.shadowed)
        className += 'shadowed ';
      if(this.rounded)
        className += 'rounded ';
      if(this.circular)
        className += 'circular ';
      if(this.bordered)
        className += 'bordered ';
      return className.trim();
    },
    getStyle() {
      return {
        width: `${this.width}px`
      }
    }
  },
  methods: {
    clickHandler(event){
      // if(this.confetti) {
      //   this.$refs.button.classList.remove('animate');
      //   this.$refs.button.classList.add('animate');
      //   setTimeout(() =>{
      //     this.$refs.button.classList.remove('animate');
      //   },700);
      // }
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
  .m-button {
    transition: all 0.5s;
  }

  .m-button-spinner {
    width: 0.75em;
    height: 0.75em;
    margin: 0px;
  }

  .m-button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .m-button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .m-button:hover span {
    padding-right: 25px;
  }

  .m-button:hover span:after {
    opacity: 1;
    right: 0;
  }

  .m-confetti.animate:before {
    display: block;
    animation: topBubbles ease-in-out 0.75s forwards;
  }

  .m-confetti.animate:after {
    display: block;
    animation: bottomBubbles ease-in-out 0.75s forwards;
  }

  @keyframes 
  topBubbles {  
    0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  @keyframes 
  bottomBubbles {  
    0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
</style>