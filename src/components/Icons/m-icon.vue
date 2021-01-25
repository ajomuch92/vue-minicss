<template>
  <span v-html="getHtml"></span>
</template>

<script>
import feather from 'feather-icons';
export default {
  name: 'm-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    config() {
      return {
        width: this.width,
        height: this.height,
        stroke: this.color
      }
    },
    getHtml() {
      return feather.icons[this.name].toSvg(this.config)
    }
  },
}
</script>

<style>

</style>