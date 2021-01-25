<template>
  <input
    v-model="currentValue"
    v-bind="$props"
    :class="{'invalid': invalid}"
    @blur="onBlurHandler"
    @change="onChangeHandler"
    @focus="onFocusHandler"
    @keydown="onKeyDownHandler"
    @keypress="onKeyPressHandler"
    @keyup="onKeyUpHandler">
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
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['date', 'datetime-local', 'month', 'time', 'week'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    form: {
      type: String,
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    min: {
      type: [String, Number],
      default: null
    },
    minlength: {
      type: [String, Number],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    pattern: {
      type: RegExp,
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
    step: {
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
  .invalid {
    border-color: var(--input-invalid-color);
    box-shadow: none;
  }
</style>