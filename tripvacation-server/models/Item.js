const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const itemSchema = new mongoose.Schema({
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
	unit: {
		type: String,
		default: 'Night',
	},
	sumBooking: {
		type: Number,
		default: 0,
	},
	isPopular: {
		type: Boolean,
		default: false,
	},
	description: {
		type: String,
		required: true,
	},
	categoryId: {
		type: ObjectId,
		ref: 'Category',
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
