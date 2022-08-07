const router = require('express').Router();
const adminController = require('../controller/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');
router.get('/dashboard', adminController.viewDashboard);
// Endpoint Category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);
// End of Endpoint Category

// Endpoint Bank
router.get('/bank', adminController.viewBank);
router.put('/bank', upload, adminController.editBank);
router.post('/bank', upload, adminController.addBank);
router.delete('/bank/:id', adminController.deleteBank);
// End of Endpoint Bank

// Endpoint Item
router.get('/item', adminController.viewItem);
router.get('/item/:id', adminController.showEditItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.post('/item', uploadMultiple, adminController.addItem);
// End of Endpoint Item
router.get('/booking', adminController.viewBooking);

module.exports = router;
