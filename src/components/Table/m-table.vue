<template>
  <div class="m-table-container">
    <div class="m-table-header">
      <span>
        <slot name="title"></slot>
      </span>
      <span>
        <slot name="search"></slot>
        <span v-if="downloadable" class="download-icon" @click="downloadContent">
          <m-icon name="download-cloud"/>
        </span>
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
        <template v-if="!masterDetail">
          <tr v-for="(item, key) in originalItems" :key="key" @click="itemClick(item)" :class="{'selected': item==selectedItem}">
            <td v-for="(header, key2) in headers" :key="key2" :data-label="header">
              <slot :name="`row-${header}`">
                {{item[header]}}
              </slot>
            </td>
          </tr>
          <div class="no-items" v-if="originalItems.length==0">{{noItemsText}}</div>
        </template>
        <template v-else>
          <template v-for="key in (originalItems.length*2)">
            <tr v-if="key%2==1" :key="key" @click="itemClick(originalItems[(key-1)/2])" :class="{'selected': originalItems[(key-1)/2]==selectedItem}">
              <td v-for="(header, key2) in headers" :key="key2" :data-label="header">
                <span class="expand-icon" v-if="key2==0" @click="expandeRow(key+1)">
                  <m-icon height="12" width="12" :name="expandedRowIndex==(key+1)?'chevron-down': 'chevron-right'"/>
                </span>
                <slot :name="`row-${header}`">
                  {{originalItems[(key-1)/2][header]}}
                </slot>
              </td>
            </tr>
            <tr v-else :key="key" v-show="expandedRowIndex==key">
              <td :colspan="headers.length">
                <slot name="details" v-bind:item="originalItems[key/2-1]">Detail</slot>
              </td>
            </tr>
          </template>
          <div class="no-items" v-if="originalItems.length==0">{{noItemsText}}</div>
        </template>
      </tbody>
    </table>
    <m-row>
      <m-col lg="3" md="6" sm="12" lg-offset="9" md-offset="6" sm-offset="0">
        <m-button v-if="numberOfPages>5" class="button-pagination" :hover-effect="false" size="small" :width="35" @click="moveBack">
          <m-icon height="15" width="15" name="chevron-left" />
        </m-button>
        <span v-if="currentPage>4&&currentPage>0">...</span>
        <m-button
          v-for="index in 5"
          :key="index"
          class="button-pagination"
          :class="{'bordered': (index-1+deltaPage)==currentPage}"
          :hover-effect="false"
          size="small"
          @click="currentPage=index+deltaPage-1"
          :width="35">{{index+deltaPage}}</m-button>
        <span v-if="numberOfPages>5&&currentPage+1<numberOfPages">...</span>
        <m-button v-if="numberOfPages>5" class="button-pagination" :hover-effect="false" size="small" :width="35" @click="moveForward">
          <m-icon height="15" width="15" name="chevron-right" />
        </m-button>
      </m-col>
    </m-row>
  </div>
</template>

<script>
import MButton from '../Buttons/m-button.vue';
import MCol from '../Grid/m-col.vue';
import MRow from '../Grid/m-row.vue';
import mIcon from '../Icons/m-icon.vue';
export default {
  components: { mIcon, MRow, MCol, MButton },
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
    },
    masterDetail: {
      type: Boolean,
      default: false
    },
    downloadable: {
      type: Boolean,
      default: false
    },
    itemsPerPage: {
      type: Number,
      default: -1
    }
  },
  data: () => ({
    selectedItem: {},
    originalItems: [],
    searchItems: [],
    expandedRowIndex: -1,
    deltaPage: 0,
    currentPage: 0,
    sortedBy: {}
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
    },
    numberOfPages() {
      if(this.itemsPerPage == -1)
        return 1;
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },
  watch: {
    search(){
      this.doSearch();
    },
    items(){
      this.setItems();
    },
    currentPage(val) {
      if(this.itemsPerPage != -1) {
        const index = val * this.itemsPerPage;
        this.originalItems = this.items.slice(index, index + this.itemsPerPage);
      }
    }
  },
  methods: {
    setItems() {
      if(this.itemsPerPage == -1)
        this.originalItems = [...this.items];
      else
        this.originalItems = this.items.slice(0, this.itemsPerPage);
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
      this.deltaPage = 0;
      this.currentPage = 0;
    },
    expandeRow(index) {
      if(this.expandedRowIndex == index) {
        this.expandedRowIndex = -1;
      } else {
        this.expandedRowIndex = index;
      }
    },
    downloadContent(){
      let csv = '';
      csv += this.headers.join(', ');
      csv += '\n';
      for(const item of this.items) {
        csv += Object.values(item).join(', ');
        csv += '\n';
      }
      const csvFile = new Blob([csv], {type: 'text/csv'});
      const downloadLink = document.createElement('a');
      const date = new Date();
      downloadLink.download = `table_content_${date.getTime()}.csv`;
      downloadLink.href = window.URL.createObjectURL(csvFile);
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink)
    },
    moveForward() {
      if(this.currentPage + 1 < this.numberOfPages){
        this.currentPage++;
        if(this.currentPage > 4 && this.currentPage < this.numberOfPages)
          this.deltaPage++;
      }
    },
    moveBack() {
      if(this.currentPage > 0) {
        this.currentPage--;
        if(this.currentPage < this.numberOfPages - 5 && this.deltaPage != 0)
          this.deltaPage--;
      }
    },
    sortItems() {
      
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

  .expand-icon {
    cursor: pointer;
  }
  
  .download-icon {
    cursor: pointer;
  }

  .button-pagination {
    margin: 10px 1px !important;
  }
</style>