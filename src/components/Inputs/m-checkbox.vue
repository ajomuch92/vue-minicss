<template>
  <label>
    <input
      v-model="currentValue"
      v-bind="$props"
      :class="{'invalid': invalid}"
      type="checkbox"
      @change="$emit('change',$event)">
      {{label}}
  </label>
</template>

<script>
export default {
  name: 'm-checkbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    form: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    currentValue: false
  }),
  created() {
    this.currentValue = this.value;
  },
  watch: {
    currentValue() {
      this.$emit('input', this.currentValue);
    },
    value() {
      this.currentValue = this.value;
    }
  }
}
</script>

<style scoped>
  [type="checkbox"] {
    vertical-align: middle !important;
  }
</style>