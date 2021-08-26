import 'mini.css';

import MAccordion from './components/Accordion/m-accordion.vue';
import MBoxColored from './components/Box-Colored/m-box-colored.vue';
import mButton from './components/Buttons/m-button.vue';
import mCardSection from './components/Cards/m-card-section.vue';
import mCard from './components/Cards/m-card.vue'
import mDrawer from './components/Drawer/m-drawer.vue';
import MDropdown from './components/Dropdown/m-dropdown.vue';
import mCol from './components/Grid/m-col.vue';
import mContainer from './components/Grid/m-container.vue';
import mRow from './components/Grid/m-row.vue';
import mSpacer from './components/Grid/m-spacer.vue';
import mHeader from './components/Header/m-header.vue';
import mFooter from './components/Header/m-footer.vue';
import mHighLight from './components/Highlight/m-highlight.vue';
import MIcon from './components/Icons/m-icon.vue';
import mHoverableImage from './components/Images/m-hoverable-image.vue';
import mImage from './components/Images/m-image.vue';
import mParallax from './components/Images/m-parallax.vue';
import mCheckbox from './components/Inputs/m-checkbox.vue';
import MFieldset from './components/Inputs/m-fieldset.vue';
import mFile from './components/Inputs/m-file.vue';
import MInput from './components/Inputs/m-input.vue';
import mRadio from './components/Inputs/m-radio.vue';
import mSelect from './components/Inputs/m-select.vue';
import mTextarea from './components/Inputs/m-textarea.vue';
import mLoading from './components/Modal/m-loading.vue';
import mModal from './components/Modal/m-modal.vue';
import mOverlay from './components/Modal/m-overlay.vue';
import mProgressBar from './components/ProgressBar/m-progress-bar.vue';
import mSpinner from './components/Spinner/m-spinner.vue';
import MTable from './components/Table/m-table.vue';
import MTabs from './components/Tabs/m-tabs.vue';
import mToast from './components/Toast/m-toast.vue';
import mTooltip from './components/Tooltip/m-tooltip.vue';
import mCountDown from './components/Countdown/m-countdown.vue';
import mFullPage from './components/Layout/m-fullpage-template.vue'
import mSlider from './components/Slider/m-slider.vue'

import size from './utils/screen-size'

export default {
  install(Vue) {
    Vue.component('m-accordion', MAccordion);
    Vue.component('m-box-colored', MBoxColored);
    Vue.component('m-button', mButton);
    Vue.component('m-card-section', mCardSection);
    Vue.component('m-card', mCard);
    Vue.component('m-drawer', mDrawer);
    Vue.component('m-dropdown', MDropdown);
    Vue.component('m-col', mCol);
    Vue.component('m-container', mContainer);
    Vue.component('m-row', mRow);
    Vue.component('m-spacer', mSpacer);
    Vue.component('m-header', mHeader);
    Vue.component('m-footer', mFooter);
    Vue.component('m-highLight', mHighLight);
    Vue.component('m-icon', MIcon);
    Vue.component('m-hoverable-image', mHoverableImage);
    Vue.component('m-image', mImage);
    Vue.component('m-parallax', mParallax);
    Vue.component('m-checkbox', mCheckbox);
    Vue.component('m-fieldset', MFieldset);
    Vue.component('m-file', mFile);
    Vue.component('m-input', MInput);
    Vue.component('m-radio', mRadio);
    Vue.component('m-select', mSelect);
    Vue.component('m-textarea', mTextarea);
    Vue.component('m-loading', mLoading);
    Vue.component('m-modal', mModal);
    Vue.component('m-overlay', mOverlay);
    Vue.component('m-progressBar', mProgressBar);
    Vue.component('m-spinner', mSpinner);
    Vue.component('m-table', MTable);
    Vue.component('m-tabs', MTabs);
    Vue.component('m-toast', mToast);
    Vue.component('m-tooltip', mTooltip);
    Vue.component('m-countdown', mCountDown);
    Vue.component('m-fullpage', mFullPage);
    Vue.component('m-slider', mSlider);
    Vue.prototype.$size = size;
  }
}