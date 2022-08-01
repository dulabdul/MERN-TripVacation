import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;
const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: 'Indonesia',
  },
  price: {
    type: Number,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: [
    {
      type: ObjectId,
      ref: 'Image',
    },
  ],
  featuredId: [
    {
      type: ObjectId,
      ref: 'Featured',
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: 'Activity',
    },
  ],
});

module.exports = mongoose.model('Item', itemSchema);
