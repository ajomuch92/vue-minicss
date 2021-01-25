<template>
  <div class="m-accordion-container">
    <div class="card" v-for="(item, key) in items" :key="key">
      <div class="section m-accordion-header" :class="{'selected': show[key]}" @click="toggleAccordion(key)" :style="headerStyle(show[key])">
        <h3>{{item.label||item}}</h3>
        <span class="m-expand-icon">
          <m-icon v-if="show[key]" name="chevron-up"/>
          <m-icon v-else name="chevron-down"/>
        </span>
      </div>
      <transition name="fadeHeight">
        <div v-show="show[key]" class="section">
          <slot :name="item.name||item.label||item"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import mIcon from '../Icons/m-icon';
export default {
  components: { mIcon },
  name: 'm-acordion',
  props: {
    items: {
      type: Array,
      required: true
    },
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    show: []
  }),
  created() {
    this.show = (new Array(this.items.length)).fill(false);
  },
  methods: {
    toggleAccordion(index) {
      if(this.expandAll)
        this.$set(this.show, index, !this.show[index]);
      else{
        for(let i = 0; i < this.show.length; i++) {
          if(i == index)
            this.$set(this.show, i, !this.show[index]);
          else
            this.$set(this.show, i, false);
        }
      }
    },
    headerStyle(showed) {
      if(showed)
        return {
          'backgroundColor': '#CCCCCC'
        }
      return {};
    }
  }
}
</script>

<style scoped>
  .card {
    width: 99%;
    max-width: 100%;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .m-accordion-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EEEEEE;
  }

  .m-accordion-header:hover {
    background-color: #CCCCCC;
  }

  .m-accordion-header h3 {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all 0.5s;
    max-height: 230px;
  }
  .fadeHeight-enter,
  .fadeHeight-leave-to
  {
    opacity: 0;
    max-height: 0px;
  }
</style>