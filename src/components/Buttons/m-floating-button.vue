<template>
  <span class="m-floating m-flex m-align-center m-justify-center">
    <slot name="default"></slot>
  </span>
</template>

<script>
export default {
  name: 'm-floating',
}
</script>

<style scoped>
  .m-floating{
    cursor: pointer;
    position: fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#00C0CA;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
    z-index: 5;
  }

  @media only screen and (max-width: 600px) {
    .m-floating {
      width: 40px;
      height: 40px;
      bottom: 20px;
      right: 20px;
    }
  }
</style>