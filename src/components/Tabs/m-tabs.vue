<template>
  <div class="m-tabs-container">
    <div class="tabs" :style="getStyleTabs">
      <div class="tab" v-for="(tab, key) in tabs" :key="key">
        <input type="radio" name="css-tabs" :id="`tab-${key}`" class="tab-switch" v-model="currentValue" :value="key">
        <label :for="`tab-${key}`" class="tab-label rounded" :class="{'tab-unselected': currentValue!=key}">
          <slot :name="`tab-header-${key+1}`">{{tab}}</slot>
        </label>
        <div class="tab-content">
          <slot :name="`tab-content-${key+1}`"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-tabs',
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    currentValue: 0
  }),
  created(){
    this.currentValue = this.value;
  },
  watch: {
    value(){
      this.currentValue = this.value;
    },
    currentValue(){
      this.$emit('input', this.value);
    }
  },
  computed: {
    getStyleTabs() {
      return {
        background: '#0277bd'
      };
    },
  }
}
</script>

<style scoped>
  .m-tabs-container {
    padding: 0px 16px;
    width: 98%;
    margin: 0 auto;
  }

  .tabs {
    position: relative;
    margin: 3rem 0;
    height: 14.75rem;
  }

  .tabs::before, .tabs::after {
    content: "";
    display: table;
  }

  .tabs::after {
    clear: both;
  }

  .tab {
    float: left;
  }

  .tab-switch {
    display: none;
  }

  .tab-unselected {
    background: #0277bd;
    border-right: 0.125rem solid #0277bd;
  }

  .tab-label {
    position: relative;
    display: block;
    line-height: 2.75em;
    height: 3em;
    padding: 0 1.618em;
    color: #fff;
    cursor: pointer;
    top: 0;
    transition: all 0.25s;
  }

  .tab-label:hover {
    top: -0.25rem;
    transition: top 0.25s;
  }

  .tab-content {
    height: 12rem;
    position: absolute;
    z-index: 1;
    top: 2.75em;
    left: 0;
    padding: 1.618rem;
    background: #fff;
    color: #2c3e50;
    border-bottom: 0.25rem solid #bdc3c7;
    opacity: 0;
    transition: all 0.35s;
    width: 96.1%;
  }

  .tab-switch:checked + .tab-label {
    background: #fff;
    color: #2c3e50;
    border-bottom: 0;
    border-right: 0.125rem solid #fff;
    transition: all 0.35s;
    z-index: 1;
    top: -0.0625rem;
  }

  .tab-switch:checked + label + .tab-content {
    z-index: 2;
    opacity: 1;
    transition: all 0.35s;
  }
</style>