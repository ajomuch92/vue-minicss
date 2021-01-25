<template>
  <div :class="getClass">
    <slot name="default"></slot>
  </div>
</template>

<script>
import {getIntValue} from '../../utils/utils';
export default {
  name: 'm-col',
  props: {
    sm: {
      type: [String, Number],
      default: null
    },
    md: {
      type: [String, Number],
      default: null
    },
    lg: {
      type: [String, Number],
      default: null
    },
    smOffset: {
      type: [String, Number],
      default: null
    },
    mdOffset: {
      type: [String, Number],
      default: null
    },
    lgOffset: {
      type: [String, Number],
      default: null
    },
  },
  computed: {
    getClass() {
      return `${this.getSizeClass} ${this.getOffsetClass}`.trim();
    },
    getSizeClass() {
      let className = '';
      if(this.sm)
        className += `col-sm-${getIntValue(this.sm)} `;
      else
        className += 'col-sm ';
      if(this.md)
        className += `col-md-${getIntValue(this.md)} `;
      else
        className += 'col-md ';
      if(this.lg)
        className += `col-lg-${getIntValue(this.lg)} `;
      else
        className += 'col-lg ';
      return className.trim();
    },
    getOffsetClass() {
      let className = '';
      if(this.smOffset)
        className += `col-sm-offset-${getIntValue(this.smOffset)} `;
      if(this.mdOffset)
        className += `col-md-offset-${getIntValue(this.mdOffset)} `;
      if(this.lgOffset)
        className += `col-lg-offset-${getIntValue(this.lgOffset)} `;
      return className.trim();
    },
  }
}
</script>

<style>

</style>