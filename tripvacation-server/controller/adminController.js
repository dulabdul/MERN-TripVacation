/* eslint-disable eqeqeq */
const Category = require('../models/Category');
const Bank = require('../models/Bank');
const Item = require('../models/Item');
const fs = require('fs-extra');
const path = require('path');
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
    try {
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
  viewItem: (req, res) => {
    res.render('admin/item/view_item', { title: 'TripVacation | Item' });
  },
  addItem: async (req, res) => {
    try {
      const { title, city, country, price } = req.body;
      // console.log(nameBank, nomorRekening, name);
      await Item.create({ title, city, country, price });
      req.flash('alertMessage', 'Success Add Item');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/item');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item');
    }
  },
  // End Of Item Section
  viewBooking: (req, res) => {
    res.render('admin/booking/view_booking', {
      title: 'TripVacation | Booking',
    });
  },
};
