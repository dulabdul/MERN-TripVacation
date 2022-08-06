const Category = require('../models/Category');
const Bank = require('../models/Bank');

module.exports = {
	viewDashboard: (req, res) => {
		res.render('admin/dashboard/view_dashboard', {
			title: 'TripVacation | Dashboard',
		});
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
			});
		} catch (error) {
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
		const bank = await Bank.find();
		const alertMessage = req.flash('alertMessage');
		const alertStatus = req.flash('alertStatus');
		const alert = {
			message: alertMessage,
			status: alertStatus,
		};
		res.render('admin/bank/view_bank', {
			bank,
			alert,
			title: 'TripVacation | Bank',
		});
	},
	addBank: async (req, res) => {
		try {
			const { nameBank, nomorRekening, name } = req.body;
			// console.log(nameBank, nomorRekening, name);
			await Bank.create({ nameBank, nomorRekening, name });
			req.flash('alertMessage', 'Success Add Bank');
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
			const { id, nameBank, nomorRekening } = req.body;
			const bank = await Bank.findOne({ _id: id });
			bank.nameBank = nameBank;
			bank.nomorRekening = nomorRekening;
			await bank.save();
			// console.log(id + nameBank + nomorRekening);
			req.flash('alertMessage', 'Success Edit Bank');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/bank');
		} catch (error) {
			req.flash('alertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},
	// End Of Bank Section
	viewItem: (req, res) => {
		res.render('admin/item/view_item', { title: 'TripVacation | Item' });
	},
	viewBooking: (req, res) => {
		res.render('admin/booking/view_booking', {
			title: 'TripVacation | Booking',
		});
	},
};
