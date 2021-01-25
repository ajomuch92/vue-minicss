<template>
  <div class="m-table-container">
    <div class="m-table-header">
      <span>
        <slot name="title"></slot>
      </span>
      <span>
        <slot name="search"></slot>
      </span>
    </div>
    <table :class="getClasses">
      <thead>
        <tr>
          <th v-for="(header, key) in headers" :key="key">
            <slot :name="`header-${header}`">
              {{header}}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in originalItems" :key="key" @click="itemClick(item)" :class="{'selected': item==selectedItem}">
          <td v-for="(header, key2) in headers" :key="key2" :data-label="header">
            <slot :name="`row-${header}`">
              {{item[header]}}
            </slot>
          </td>
        </tr>
        <div class="no-items" v-if="originalItems.length==0">{{noItemsText}}</div>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'm-table',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    search: {
      type: String,
      default: ''
    },
    noItemsText: {
      type: String,
      default: 'Sin datos para mostrar'
    }
  },
  data: () => ({
    selectedItem: {},
    originalItems: [],
    searchItems: []
  }),
  created() {
    this.setItems();
  },
  computed: {
    getClasses() {
      return {
        'horizontal': this.horizontal,
        'striped': this.striped,
        'hoverable': (this.hoverable||this.selectable),
        'dense': this.dense,
        'selectable': this.selectable
      };
    }
  },
  watch: {
    search(){
      this.doSearch();
    },
    items(){
      this.setItems();
    }
  },
  methods: {
    setItems() {
      this.originalItems = [...this.items];
      this.searchItems = [...this.items];
    },
    itemClick(item){
      if(this.selectedItem === item)
        item = {};
      this.$emit('item-click', item);
      if(this.selectable){
        this.selectedItem = item;
      }
    },
    doSearch() {
      if(this.search) {
        const filtered = this.originalItems.filter(r => {
          let show = false;
          for(const key in r) {
            const words = r[key].toString().toLowerCase();
            show = words.includes(this.search.toLowerCase());
            if(show)
              break;
          }
          return show;
        });
        this.originalItems = [...filtered];
      } else {
        this.originalItems = [...this.items];
      }
    }
  }
}
</script>

<style scoped>
  .dense td, .dense th{
    padding: calc(var(--universal-padding) / 2) calc(var(--universal-padding)) !important;
  }

  td {
    background-color: transparent !important;
  }

  .selected {
    background-color: #1f79c2 !important;
  }

  .m-table-header {
    display: flex;
    justify-content: space-between;
    padding: 0px calc(var(--universal-padding) * 2);
  }

  .selectable {
    cursor: pointer;
  }

  .no-items{
    width: 100%;
    text-align: center;
  }
</style>