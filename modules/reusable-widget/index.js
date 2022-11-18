module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Reusable Content'
  },
  fields: {
    add: {
      _reusable: {
        type: 'relationship',
        withType: 'reusable',
        label: 'Selected Content',
        required: true
      }
    }
  }
};
