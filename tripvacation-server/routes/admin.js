const router = require('express').Router();
const adminController = require('../controller/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');
router.get('/dashboard', adminController.viewDashboard);
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);
router.get('/bank', adminController.viewBank);
router.put('/bank', upload, adminController.editBank);
router.post('/bank', upload, adminController.addBank);
router.delete('/bank/:id', adminController.deleteBank);
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/booking', adminController.viewBooking);

module.exports = router;
