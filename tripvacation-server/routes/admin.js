const router = require('express').Router();
const adminController = require('../controller/adminController');
router.get('/dashboard', adminController.viewDashboard);
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);
router.get('/bank', adminController.viewBank);
router.put('/bank', adminController.editBank);
router.post('/bank', adminController.addBank);
router.get('/item', adminController.viewItem);
router.get('/booking', adminController.viewBooking);

module.exports = router;
