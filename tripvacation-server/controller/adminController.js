/* eslint-disable eqeqeq */
const Category = require('../models/Category');
const Bank = require('../models/Bank');
const Item = require('../models/Item');
const Image = require('../models/Image');
const Featured = require('../models/Featured');
const Activity = require('../models/Activity');
const Users = require('../models/Users');
const Booking = require('../models/Booking');
const Member = require('../models/Member');
const fs = require('fs-extra');
const bcrypt = require('bcryptjs');
const path = require('path');

module.exports = {
	viewLogin: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			if (req.session.user == null || req.session.user == undefined) {
				res.render('index', {
					alert,
					title: 'TripVacation | Login',
				});
			} else {
				res.redirect('/admin/dashboard');
			}
		} catch (error) {
			res.redirect('/admin/login');
		}
	},
	actionLogin: async (req, res) => {
		try {
			const { username, password } = req.body;
			const user = await Users.findOne({ username: username });
			if (!user) {
				req.flash('alertMessage', 'User Not Found!');
				req.flash('alertStatus', 'danger');
				res.redirect('/admin/login');
			}
			const isPasswordMatch = await bcrypt.compare(password, user.password);
			if (!isPasswordMatch) {
				req.flash('alertMessage', 'Wrong Passoword!');
				req.flash('alertStatus', 'danger');
				res.redirect('/admin/login');
			}
			req.session.user = {
				id: user.id,
				username: user.username,
			};
			res.redirect('/admin/dashboard');
		} catch (error) {}
	},
	actionLogout: async (req, res) => {
		req.session.destroy();
		res.redirect('/admin/login');
	},
	//
	viewDashboard: async (req, res) => {
		try {
			const member = await Member.find();
			const booking = await Booking.find();
			const item = await Item.find();
			res.render('admin/dashboard/view_dashboard', {
				title: 'TripVacation | Dashboard',
				user: req.session.user,
				member,
				booking,
				item,
			});
		} catch (error) {
			console.log(error);
		}
	},
	// Category Section
	viewCategory: async (req, res) => {
		try {
			const category = await Category.find();
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			// console.log(category);
			res.render('admin/category/view_category', {
				category,
				alert,
				title: 'TripVacation | Category',
				user: req.session.user,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},
	addCategory: async (req, res) => {
		try {
			const { name } = req.body;
			// console.log(name);
			await Category.create({ name });
			req.flash('alertMessage', 'Success Add Category');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/category');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},
	editCategory: async (req, res) => {
		try {
			const { id, name } = req.body;
			console.log(id);
			// console.log(name);
			const category = await Category.findOne({ _id: id });
			category.name = name;
			await category.save();
			req.flash('alertMessage', 'Success Edit Category');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/category');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},
	deleteCategory: async (req, res) => {
		try {
			const { id } = req.params;
			// console.log(id);
			// console.log(name);
			const category = await Category.findOne({ _id: id });
			await category.remove();
			req.flash('alertMessage', 'Success Delete Category');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/category');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},
	// End Of Category Section

	// Bank Section
	viewBank: async (req, res) => {
		try {
			const bank = await Bank.find();
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
				user: req.session.user,
			};
			res.render('admin/bank/view_bank', {
				bank,
				alert,
				title: 'TripVacation | Bank',
				user: req.session.user,
			});
		} catch (error) {
			res.redirect('/admin/bank');
		}
	},
	addBank: async (req, res) => {
		try {
			const { nameBank, nomorRekening, name } = req.body;
			// console.log(nameBank, nomorRekening, name);
			console.log(req.file);
			await Bank.create({
				nameBank,
				nomorRekening,
				name,
				imageUrl: `images/${req.file.filename}`,
			});
			req.flash('alertMessage', 'Success Add Bank');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/bank');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},
	deleteBank: async (req, res) => {
		try {
			const { id } = req.params;
			const bank = await Bank.findOne({ _id: id });
			await fs.unlink(path.join(`public/${bank.imageUrl}`));
			await bank.remove();
			req.flash('alertMessage', 'Success Delete Bank');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/bank');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},
	editBank: async (req, res) => {
		try {
			const { id, name, nameBank, nomorRekening } = req.body;
			const bank = await Bank.findOne({ _id: id });
			if (req.file == undefined) {
				bank.name = name;
				bank.nameBank = nameBank;
				bank.nomorRekening = nomorRekening;
				await bank.save();
				// console.log(id + nameBank + nomorRekening);
				req.flash('alertMessage', 'Success Edit Bank');
				req.flash('alertStatus', 'success');
				res.redirect('/admin/bank');
			} else {
				await fs.unlink(path.join(`public/${bank.imageUrl}`));
				bank.name = name;
				bank.nameBank = nameBank;
				bank.nomorRekening = nomorRekening;
				bank.imageUrl = `images/${req.file.filename}`;
				// console.log(req.file.filename);
				await bank.save();
				// console.log(id + nameBank + nomorRekening);
				req.flash('alertMessage', 'Success Edit Bank');
				req.flash('alertStatus', 'success');
				res.redirect('/admin/bank');
			}
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},
	// End Of Bank Section
	// Item Section
	viewItem: async (req, res) => {
		try {
			const item = await Item.find()
				.populate({ path: 'imageId', select: 'id imageUrl' })
				.populate({ path: 'categoryId', select: 'id name' });
			const category = await Category.find();
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/item/view_item', {
				title: 'TripVacation | Item',
				category,
				item,
				alert,
				action: 'view',
				user: req.session.user,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},
	addItem: async (req, res) => {
		try {
			const { categoryId, title, city, price, description } = req.body;
			if (req.files.length > 0) {
				const category = await Category.findOne({ _id: categoryId });
				const newItem = {
					categoryId: category._id,
					title,
					description: description,
					price,
					city,
				};
				const item = await Item.create(newItem);
				category.itemId.push({ _id: item._id });
				await category.save();
				for (let i = 0; i < req.files.length; i++) {
					const imageSave = await Image.create({
						imageUrl: `images/${req.files[i].filename}`,
					});
					item.imageId.push({ _id: imageSave._id });
					await item.save();
				}
				req.flash('alertMessage', 'Success Add Item');
				req.flash('alertStatus', 'success');
				res.redirect('/admin/item');
			}
		} catch (error) {
			// console.log(error);
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},
	showImageItem: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id }).populate({
				path: 'imageId',
				select: 'id imageUrl',
			});
			// console.log(item.imageId);
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/item/view_item', {
				title: 'TripVacation | Item Image',
				item,
				alert,
				action: 'show image',
				user: req.session.user,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},
	showEditItem: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id })
				.populate({
					path: 'imageId',
					select: 'id imageUrl',
				})
				.populate({ path: 'categoryId', select: 'id name' });
			const category = await Category.find();
			console.log(item);
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/item/view_item', {
				title: 'TripVacation | Edit Item',
				item,
				category,
				alert,
				action: 'edit item',
				user: req.session.user,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},
	editItem: async (req, res) => {
		try {
			const { id } = req.params;
			const { categoryId, title, city, price, description } = req.body;
			const item = await Item.findOne({ _id: id })
				.populate({ path: 'imageId', select: 'id imageUrl' })
				.populate({ path: 'categoryId', select: 'id name' });
			if (req.files.length > 0) {
				for (let i = 0; i < item.imageId.length; i++) {
					const imageUpdate = await Image.findOne({ _id: item.imageId[i]._id });
					await fs.unlink(path.join(`public/${imageUpdate.imageUrl}`));
					imageUpdate.imageUrl = `images/${req.files[i].filename}`;
					await imageUpdate.save();
				}
				item.title = title;
				item.city = city;
				item.price = price;
				item.description = description;
				item.categoryId = categoryId;
				await item.save();
				req.flash('alertMessage', 'Success Update Item');
				req.flash('alertStatus', 'success');
				res.redirect('/admin/item');
			} else {
				item.title = title;
				item.city = city;
				item.price = price;
				item.description = description;
				item.categoryId = categoryId;
				await item.save();
				req.flash('alertMessage', 'Success Update Item');
				req.flash('alertStatus', 'success');
				res.redirect('/admin/item');
			}
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},
	deleteItem: async (req, res) => {
		try {
			const { id } = req.params;
			const item = await Item.findOne({ _id: id }).populate('imageId');
			for (let i = 0; i < item.imageId.length; i++) {
				Image.findOne({ _id: item.imageId[i]._id })
					.then((image) => {
						fs.unlink(path.join(`public/${image.imageUrl}`));
						image.remove();
					})
					.catch((error) => {
						req.flash('alertMessage', `${error.message}`);
						req.flash('alertStatus', 'danger');
						res.redirect('/admin/item');
					});
			}
			await item.remove();
			req.flash('alertMessage', 'Success Delete Item');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/item');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},
	viewDetailItem: async (req, res) => {
		const { itemId } = req.params;
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			const featured = await Featured.find({ itemId: itemId });
			const activity = await Activity.find({ itemId: itemId });
			// console.log(featured)
			res.render('admin/item/detail-item/view_detail_item', {
				title: 'TripVacation | Detail Item',
				alert,
				itemId,
				featured,
				activity,
				user: req.session.user,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	// End Of Item Section

	// Featured Section
	addFeatured: async (req, res) => {
		const { name, qty, itemId } = req.body;
		try {
			if (!req.file) {
				req.flash('alertMessage', 'Image Not Found!');
				req.flash('alertStatus', 'danger');
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
			const featured = await Featured.create({
				name,
				qty,
				itemId,
				imageUrl: `images/${req.file.filename}`,
			});
			const item = await Item.findOne({ _id: itemId });
			item.featuredId.push({ _id: featured._id });
			await item.save();
			req.flash('alertMessage', 'Success Add Featured');
			req.flash('alertStatus', 'success');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	editFeatured: async (req, res) => {
		const { id, name, qty, itemId } = req.body;
		// console.log(id)
		try {
			const featured = await Featured.findOne({ _id: id });

			if (req.file == undefined) {
				featured.name = name;
				featured.qty = qty;
				await featured.save();
				// console.log(id + namefeatured + nomorRekening);
				req.flash('alertMessage', 'Success Update Featured');
				req.flash('alertStatus', 'success');
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			} else {
				await fs.unlink(path.join(`public/${featured.imageUrl}`));
				featured.name = name;
				featured.qty = qty;
				featured.imageUrl = `images/${req.file.filename}`;
				// console.log(req.file.filename);
				await featured.save();
				// console.log(id + namefeatured + nomorRekening);
				req.flash('alertMessage', 'Success Update Featured');
				req.flash('alertStatus', 'success');
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	deleteFeatured: async (req, res) => {
		const { id, itemId } = req.params;
		try {
			const featured = await Featured.findOne({ _id: id });
			const item = await Item.findOne({ _id: itemId }).populate('featuredId');
			for (let i = 0; i < item.featuredId.length; i++) {
				if (item.featuredId[i]._id.toString() === featured._id.toString()) {
					item.featuredId.pull({ _id: featured._id });
					await item.save();
				}
			}
			await fs.unlink(path.join(`public/${featured.imageUrl}`));
			await featured.remove();
			req.flash('alertMessage', 'Success Delete Featured');
			req.flash('alertStatus', 'success');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	// End Of Featured

	// Activity Section
	addActivity: async (req, res) => {
		const { name, type, itemId } = req.body;
		try {
			if (!req.file) {
				req.flash('alertMessage', 'Image Not Found!');
				req.flash('alertStatus', 'danger');
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
			const activity = await Activity.create({
				name,
				type,
				itemId,
				imageUrl: `images/${req.file.filename}`,
			});
			const item = await Item.findOne({ _id: itemId });
			item.activityId.push({ _id: activity._id });
			await item.save();
			req.flash('alertMessage', 'Success Add Activity');
			req.flash('alertStatus', 'success');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	editActivity: async (req, res) => {
		const { id, name, type, itemId } = req.body;
		try {
			const activity = await Activity.findOne({ _id: id });

			if (req.file == undefined) {
				activity.name = name;
				activity.type = type;
				await activity.save();
				// console.log(id + nameactivity + nomorRekening);
				req.flash('alertMessage', 'Success Update Activity');
				req.flash('alertStatus', 'success');
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			} else {
				await fs.unlink(path.join(`public/${activity.imageUrl}`));
				activity.name = name;
				activity.type = type;
				activity.imageUrl = `images/${req.file.filename}`;
				// console.log(req.file.filename);
				await activity.save();
				// console.log(id + nameactivity + nomorRekening);
				req.flash('alertMessage', 'Success Update Activity');
				req.flash('alertStatus', 'success');
				res.redirect(`/admin/item/show-detail-item/${itemId}`);
			}
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	deleteActivity: async (req, res) => {
		const { id, itemId } = req.params;
		try {
			const activity = await Activity.findOne({ _id: id });
			const item = await Item.findOne({ _id: itemId }).populate('activityId');
			for (let i = 0; i < item.activityId.length; i++) {
				if (item.activityId[i]._id.toString() === activity._id.toString()) {
					item.activityId.pull({ _id: activity._id });
					await item.save();
				}
			}
			await fs.unlink(path.join(`public/${activity.imageUrl}`));
			await activity.remove();
			req.flash('alertMessage', 'Success Delete Activity');
			req.flash('alertStatus', 'success');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/item/show-detail-item/${itemId}`);
		}
	},
	// End of Activity
	viewBooking: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			const booking = await Booking.find()
				.populate('memberId')
				.populate('bankId');
			res.render('admin/booking/view_booking', {
				title: 'TripVacation | Booking',
				user: req.session.user,
				booking,
				alert,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/booking');
		}
	},
	viewBookingDetail: async (req, res) => {
		const { id } = req.params;
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			const booking = await Booking.findOne({ _id: id })
				.populate('memberId')
				.populate('bankId');
			console.log(booking);
			res.render('admin/booking/show_detail_booking', {
				title: 'TripVacation | Detail Booking',
				user: req.session.user,
				booking,
				alert,
			});
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/booking');
		}
	},
	actionConfirmation: async (req, res) => {
		const { id } = req.params;
		try {
			const booking = await Booking.findOne({ _id: id });
			booking.payments.status = 'Accept';
			await booking.save();
			req.flash('alertMessage', 'Success Confirmation Payments');
			req.flash('alertStatus', 'success');
			res.redirect(`/admin/booking/${id}`);
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/booking/${id}`);
		}
	},
	actionReject: async (req, res) => {
		const { id } = req.params;
		try {
			const booking = await Booking.findOne({ _id: id });
			booking.payments.status = 'Reject';
			await booking.save();
			req.flash('alertMessage', 'Success Rejects Payments');
			req.flash('alertStatus', 'success');
			res.redirect(`/admin/booking/${id}`);
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect(`/admin/booking/${id}`);
		}
	},
};
