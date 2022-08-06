const Category = require('../models/Category');
const Bank = require('../models/Bank');

module.exports = {
  viewDashboard: (req, res) => {
    res.render('admin/dashboard/view_dashboard');
  },
  viewCategory: async (req, res) => {
    const category = await Category.find();
    // console.log(category);
    res.render('admin/category/view_category', { category });
  },
  addCategory: async (req, res) => {
    const { name } = req.body;
    // console.log(name);
    await Category.create({ name });
    res.redirect('/admin/category');
  },
  editCategory: async (req, res) => {
    const { id, name } = req.body;
    // console.log(id);
    // console.log(name);
    const category = await Category.findOne({ _id: id });
    category.name = name;
    await category.save();
    res.redirect('/admin/category');
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    // console.log(name);
    const category = await Category.findOne({ _id: id });
    await category.remove();
    res.redirect('/admin/category');
  },
  viewBank: async (req, res) => {
    const bank = await Bank.find();
    res.render('admin/bank/view_bank', { bank });
  },
  addBank: async (req, res) => {
    const { nameBank, nomorRekening, name } = req.body;
    // console.log(nameBank, nomorRekening, name);
    await Bank.create({ nameBank, nomorRekening, name });
    res.redirect('/admin/bank');
  },
  viewItem: (req, res) => {
    res.render('admin/item/view_item');
  },
  viewBooking: (req, res) => {
    res.render('admin/booking/view_booking');
  },
};
