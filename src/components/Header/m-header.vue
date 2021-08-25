<template>
  <header ref="header" class="m-header m-flex m-align-center" :class="isSticky">
    <span class="logo">
      <slot name="logo"></slot>
    </span>
    <slot v-if="!$size.isExtraSmall()" name="default"></slot>
    <m-spacer/>
    <m-drawer v-if="$size.isExtraSmall()" id="m-navbar">
      <div class="m-flex m-flex-column" v-html="htmlDrawer"></div>
    </m-drawer>
  </header>
</template>

<script>
import MDrawer from '../Drawer/m-drawer.vue';
import MSpacer from '../Grid/m-spacer.vue';

export default {
  name: 'm-header',
  components: {
    MDrawer,
    MSpacer
  },
  props: {
    sticky: {
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    children: []
  }),
  mounted() {
    const {children} = this.$refs.header;
    for(const element of children) {
      if(!element.classList.contains('logo')) {
        this.children.push(element);
      }
    }
  },
  computed: {
    isSticky(){
      return this.sticky? 'sticky': '';
    },
    htmlDrawer() {
      let html = '';
      for(const element of this.children) {
        html += element.outerHTML
      }
      return html;
    }
  }
}
</script>

<style scoped>
  .m-header {
    box-shadow: 1px 1px 2px #999;
  }
</style>