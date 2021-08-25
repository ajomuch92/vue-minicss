<template>
  <div class="m-slider-container">
    <div class="m-number-slider">{{currentIndex + 1}}/{{images.length}}</div>
    <transition name="fade" v-for="(image, key) in images" :key="key">
      <div class="m-slide" v-show="currentIndex==key">
        <img :src="image.src||image">
        <p v-if="image.caption">{{image.caption}}</p>
      </div>
    </transition>
    <span class="m-prev" @click="back">&#10094;</span>
    <span class="m-next" @click="advance">&#10095;</span>
  </div>
</template>

<script>
export default {
  name: 'm-slider',
  props: {
    images: {
      type: Array,
      required: true
    },
    loop: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  methods: {
    advance() {
      if(this.currentIndex == (this.images.length - 1))
        this.currentIndex = -1;
      this.currentIndex++;
    },
    back() {
      if(this.currentIndex == 0)
        this.currentIndex = this.images.length;
      this.currentIndex--;
    }
  }
}
</script>

<style scoped>
  .m-slider-container {
    position: relative;
  }

  .m-number-slider {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background-color: white;
    padding: 5px;
    border-radius: 3px;
    opacity: 0.75;
  }

  .m-number-slider:hover {
    opacity: 1;
  }

  .m-slide img {
    width: 100%;
  }

  .m-slide p {
    background-color: #2c3e50;
    margin: 0px;
    color: white;
    padding: 5px;
    margin-top: -8px;
    text-align: center;
  }

  .m-prev,
  .m-next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    text-decoration: none;
  }

  .m-next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .m-prev:hover,
  .m-next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .m-sliders {
    position: relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>