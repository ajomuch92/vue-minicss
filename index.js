import 'mini.css';

import mHeader from '../src/components/Header/m-header';
import mDrawer from '../src/components/Drawer/m-drawer';
import mSpinner from '../src/components/Spinner/m-spinner';
import mProgressBar from '../src/components/ProgressBar/m-progress-bar';
import mHighLight from '../src/components/Highlight/m-highlight';
import mTooltip from '../src/components/Tooltip/m-tooltip';
import mButton from '../src/components/Buttons/m-button';
import mToast from '../src/components/Toast/m-toast';
import MFieldset from '../src/components/Inputs/m-fieldset';
import MIcon from '../src/components/Icons/m-icon';
import MDropdown from '../src/components/Dropdown/m-dropdown';
import MTable from '../src/components/Table/m-table';
import MAccordion from '../src/components/Accordion/m-accordion';
import MInput from '../src/components/Inputs/m-input';
import MTabs from '../src/components/Tabs/m-tabs';

export default  {
  install(Vue) {
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
};