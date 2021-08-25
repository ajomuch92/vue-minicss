<template>
  <span class="m-countdown">
    <slot name="default" v-bind:time="objectDate">
      {{getCountDownText}}
    </slot>
  </span>
</template>

<script>
export default {
  name: 'm-countdown',
  props: {
    endDate: {
      type: Date,
      required: true
    }
  },
  data: () => ({
    getCountDownText: '',
    interval: undefined,
    objectDate: {}
  }),
  mounted() {
    this.interval = setInterval(() => {
      const beginDate = new Date();
      const distance = this.endDate.getTime() - beginDate.getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.objectDate = {
        days, hours, minutes, seconds
      }
      this.getCountDownText = `${days} d ${hours} h ${minutes} m ${seconds} s`;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style>

</style>