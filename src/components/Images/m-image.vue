<template>
  <figure>
    <img :class="innerClass" :src="src" :alt="alt" :style="getStyle"/>
    <figcaption v-if="caption.length>0">{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  name:'m-image',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 240
    },
    height: {
      type: [Number, String],
      default: 240
    },
  },
  computed: {
    getStyle() {
      const style = {};
      if(typeof this.width == 'number')
        style['width'] = `${this.width}px`;
      else
        style['width'] = this.width;
      if(typeof this.height == 'number')
        style['height'] = `${this.height}px`;
      else
        style['height'] = this.height;
      return style;
    }
  }
}
</script>

<style>

</style>