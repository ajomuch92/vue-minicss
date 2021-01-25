<template>
  <div class="m-parallax" :style="getStyle"></div>
</template>

<script>
export default {
  name: 'm-parallax',
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: ''
    }
  },
  computed: {
    getStyle(){
      return {
        backgroundImage: `url(${this.src})`,
        height: this.height||`${this.getHeight}px`
      }
    },
    getHeight() {
      const body = document.body, html = document.documentElement;
      return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    }
  }
}
</script>

<style scoped>  
  .m-parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>