<template>
  <select class="m-select" :class="{'invalid': invalid}" v-model="currentValue" v-bind="validProps" @change="$emit('change', $event)">
    <option v-if="placeholder.length>0" :value="undefined" hidden>{{placeholder}}</option>
    <option v-for="(option, key) in options" :key="key" :value="option.value">
      {{option.label}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'm-select',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => ([]),
      required: true
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
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    currentValue: undefined
  }),
  created() {
    if(this.value)
      this.currentValue = this.value;
  },
  watch: {
    currentValue() {
      this.$emit('input', this.currentValue);
    },
    value() {
      this.currentValue = this.value;
    }
  },
  computed: {
    validProps() {
      return {
        disabled: this.disabled,
        form: this.form,
        name: this.name,
        readonly: this.readonly
      }
    }
  },
}
</script>

<style>

</style>