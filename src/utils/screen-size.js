import Vue from 'vue';
const size = Vue.observable({
  height: 0,
  width: 0,
  isExtraSmall: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  isExtraLarge: false
});
var resizeObserver;

export default {
  width: () => size.width,
  height: () => size.height,
  isExtraSmall: () => size.isExtraSmall,
  isSmall: () => size.isSmall,
  isMedium: () => size.isMedium,
  isLarge: () => size.isLarge,
  isExtraLarge: () => size.isExtraLarge
}

window.addEventListener('DOMContentLoaded', () => {
  resizeObserver = new ResizeObserver( () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    size.isExtraSmall = size.width < 600;
    size.isSmall = size.width >= 600 && size.width < 960;
    size.isMedium = size.width >= 960 && size.width < 1264
    size.isLarge = size.width >= 1264 && size.width < 1904;
    size.isExtraLarge = size.width >= 1904;
  });
  resizeObserver.observe(document.body);
});

window.onbeforeunload = () => {
  resizeObserver.unobserve();
}
