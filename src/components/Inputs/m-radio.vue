<template>
  <div class="radio-container" :class="{'vertical': vertical}">
    <label v-for="(radio, key) in items" :key="key" :id="radio.id||''">
      <input
        v-model="currentValue"
        type="radio"
        v-bind="validProps"
        :value="radio.value"
        @change="$emit('change',$event)">
        {{radio.label}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'm-radio',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    items: {
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
    vertical: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    currentValue: undefined
  }),
  created() {
    this.currentValue = this.value;
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

<style lang="scss" scoped>
  [type="radio"] {
    vertical-align: middle !important;
  }

  .radio-container {
    display: flex;
  }

  .vertical {
    flex-direction: column;
  }
</style>