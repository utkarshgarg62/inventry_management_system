const mongoose = require('mongoose');

const model_name = new mongoose.Schema(
  {
    a: {
      type: String,
      required: true,
      unique: true,
    },
    b: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    c: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    d: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('collections_name', model_name);
