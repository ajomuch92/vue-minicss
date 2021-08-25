<template>
  <div class="m-fullpage-container" :style="{...style, ...{height: `${$size.height()}px`}}">
    <div class="top-left">
      <slot name="topLeft" />
    </div>
    <div class="top-right">
      <slot name="topRight" />
    </div>
    <div class="center">
      <slot name="default"></slot>
    </div>
    <div class="bottom-center">
      <slot name="bottom-center"></slot>
    </div>
    <div class="bottom-left">
      <slot name="bottomLeft" />
    </div>
    <div class="bottom-right">
      <slot name="bottomRight" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-fullpage-template',
  props: {
    backgroundUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      const style = {}
      if(this.backgroundUrl)
        style['backgroundImage'] = `url(${this.backgroundUrl})`;
      return style;
    },
    height() {
      return this.$size.height();
    }
  }
}
</script>

<style scoped>
  .m-fullpage-container {
    width: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    font-family: 'Courier New', Courier, monospace;
    font-size: 25px;
  }

  .top-left {
    position: absolute;
    top: 0;
    left: 16px;
  }

  .top-right {
    position: absolute;
    top: 0;
    right: 16px;
  }

  .bottom-left {
    position: absolute;
    bottom: 0;
    left: 16px;
  }

  .bottom-right {
    position: absolute;
    bottom: 0;
    right: 16px;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .bottom-center {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>