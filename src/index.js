// import 'mini.css';

import mHeader from './components/Header/m-header.vue';
import mDrawer from './components/Drawer/m-drawer.vue';
import mSpinner from './components/Spinner/m-spinner.vue';
import mProgressBar from './components/ProgressBar/m-progress-bar.vue';
import mHighLight from './components/Highlight/m-highlight.vue';
import mTooltip from './components/Tooltip/m-tooltip.vue';
import mButton from './components/Buttons/m-button.vue';
import mToast from './components/Toast/m-toast.vue';
import MFieldset from './components/Inputs/m-fieldset.vue';
import MIcon from './components/Icons/m-icon.vue';
import MDropdown from './components/Dropdown/m-dropdown.vue';
import MTable from './components/Table/m-table.vue';
import MAccordion from './components/Accordion/m-accordion.vue';
import MInput from './components/Inputs/m-input.vue';
import MTabs from './components/Tabs/m-tabs.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('m-header', mHeader);
  Vue.component('m-drawer', mDrawer);
  Vue.component('m-spinner', mSpinner);
  Vue.component('m-progressBar', mProgressBar);
  Vue.component('m-highLight', mHighLight);
  Vue.component('m-tooltip', mTooltip);
  Vue.component('m-button', mButton);
  Vue.component('m-toast', mToast);
  Vue.component('m-fieldset', MFieldset);
  Vue.component('m-icon', MIcon);
  Vue.component('m-dropdown', MDropdown);
  Vue.component('m-table', MTable);
  Vue.component('m-accordion', MAccordion);
  Vue.component('m-input', MInput);
  Vue.component('m-tabs', MTabs);
}

const plugin = {
  install,
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

component.install = install

export default component