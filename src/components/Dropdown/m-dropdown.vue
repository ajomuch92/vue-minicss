<template>
  <div ref="dropdown" class="m-dropdown" @mouseenter="onHoverHandler" @mouseleave="onMouseLeave">
    <span @click="show=!show">
      <slot name="default"></slot>
    </span>
    <div v-show="show" class="m-dropdown-content rounded shadowed">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-dropdown',
  props: {
    hover: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
    show: false,
  }),
  mounted() {
    if(!this.hover)
      window.addEventListener('click', this.clickOutside);
  },
  beforeDestroy() {
    if(!this.hover)
      window.removeEventListener('click', this.clickOutside);
  },
  methods: {
    onHoverHandler() {
      if(this.hover)
        this.show = true;
    },
    onMouseLeave() {
      if(this.hover)
        this.show = false;
    },
    clickOutside(e) {
      if (!this.$refs.dropdown.contains(e.target)){
        this.show = false;
      } 
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-dropdown {
    position: relative;
    display: inline-block;
  }

  .m-dropdown span {
    padding: 4px;
    margin: 2px;
    cursor: pointer;
  }

  .m-dropdown-content {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    padding: 8px;
    z-index: 10;
  }
</style>