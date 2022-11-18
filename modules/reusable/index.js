module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Reusable Content'
  },
  fields: {
    add: {
      body: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      }
    }
  }
};
