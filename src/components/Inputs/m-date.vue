<template>
  <input
    ref="input"
    v-bind="validProps"
    :class="{'invalid': invalid}"
    @blur="onBlurHandler"
    @change="onDateChangeHandler"
    @focus="onFocusHandler"
    @keydown="onKeyDownHandler"
    @keypress="onKeyPressHandler"
    @keyup="onKeyUpHandler">
</template>

<script>
import MixinEventsText from '../../mixins/mixin-events-text';
import formatter from '../../utils/date';

export default {
  name: 'm-date',
  props: {
    value: {
      type: Date,
      default: null
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['date', 'datetime-local'].indexOf(value) !== -1
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
    name: {
      type: String,
      default: null
    },
    pattern: {
      type: RegExp,
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
  mixins: [MixinEventsText],
  computed: {
    validProps() {
      return {
        type: this.type,
        disabled: this.disabled,
        form: this.form,
        name: this.name,
        pattern: this.pattern,
        readonly: this.readonly
      }
    }
  },
  mounted() {
    this.setDate();
  },
  watch: {
    value() {
      this.setDate();
    }
  },
  methods: {
    setDate() {
      let value = '';
      if(this.type == 'date')
        value = formatter.yyyyMMdd(this.value);
      else if(this.type == 'datetime-local')
        value = formatter.dateTimeLocal(this.value);
      this.$refs.input.value = value;
    },
    onDateChangeHandler(e) {
      this.$emit('change', e);
      this.$emit('input', new Date(e.target.value));
    },
  }
}
</script>

<style scoped>
  .invalid {
    border-color: var(--input-invalid-color);
    box-shadow: none;
  }
</style>