import mongoose from 'mongoose';
const { Schema } = mongoose;

const featuredSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Featured', featuredSchema);
