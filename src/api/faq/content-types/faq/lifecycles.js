const slugify = require("slugify");

module.exports = {
  beforeCreate(data) {
    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },

  afterCreate(params, data) {
    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};
