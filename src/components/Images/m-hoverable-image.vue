<template>
  <div class="hoverable-image-container" :style="getStyle">
    <img :src="src" :alt="alt" class="hoverable-image">
    <div class="hoverable-image-body" :style="{backgroundColor: bodyColor}">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'m-hoverable-image',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
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
    bodyColor: {
      type: String,
      default: 'transparent'
    }
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

<style lang="scss" scoped>
  .hoverable-image-container {
    position: relative;
  }

  .hoverable-image {
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    width: inherit;
    height: inherit;
  }

  .hoverable-image-body {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    color: black;
  }

  .hoverable-image-container:hover .hoverable-image{
    opacity: 0.3;
  }
  
  .hoverable-image-container:hover .hoverable-image-body{
    opacity: 1;
  }
</style>