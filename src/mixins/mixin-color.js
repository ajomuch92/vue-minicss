const MixinColor = {
  props: {
    color: {
      type: String,
      default: '',
      validator: (value) => {
        return ['primary', 'secondary', 'tertiary', ''].indexOf(value) !== -1
      }
    }
  }
};

export default MixinColor;