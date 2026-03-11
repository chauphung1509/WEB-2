const mongoose = require('mongoose');

const fashionSchema = new mongoose.Schema(
  {
    style: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },

    // Legacy field compatibility for existing documents.
    fashion_subject: {
      type: String,
      trim: true,
    },
    fashion_detail: {
      type: String,
      trim: true,
    },
    fashion_image: {
      type: String,
      trim: true,
    },
  },
  {
    collection: process.env.MONGODB_COLLECTION || 'Fashion',
    versionKey: false,
  }
);

fashionSchema.pre('save', function preSave(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Fashion', fashionSchema);
