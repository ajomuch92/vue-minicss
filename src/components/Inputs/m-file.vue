<template>
  <div class="file-container">
    <input :id="id" class="file-button" type="file" :accept="accept" @change="onFileChange"/>
    <label :for="id" class="button" :class="{'small': small}">
      <slot name="default"></slot>
    </label>
    <label v-if="showLabel">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'm-file',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    currentValue: undefined,
    label: '',
  }),
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if(!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        const fileResult = e.target.result;
        this.$emit('input', fileResult);
      };
      this.label = file.name;
      reader.readAsDataURL(file);
    },
  }
}
</script>

<style scoped>
  .file-button {
    display: none !important;
  }
</style>