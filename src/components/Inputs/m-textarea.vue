<template>
  <textarea
    v-model="currentValue"
    v-bind="$props"
    :class="{'invalid': invalid}"
    @blur="onBlurHandler"
    @change="onChangeHandler"
    @focus="onFocusHandler"
    @keydown="onKeyDownHandler"
    @keypress="onKeyPressHandler"
    @keyup="onKeyUpHandler">
  </textarea>
</template>

<script>
import MixinEventsText from '../../mixins/mixin-events-text';

export default {
  name: 'm-input',
  props: {
    value: {
      type: [String, Number],
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
    maxlength: {
      type: [String, Number],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: [String, Number],
      default: null
    },
    cols: {
      type: [String, Number],
      default: null
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  mixins: [MixinEventsText],
  data: () => ({
    currentValue: null
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

<style>

</style>