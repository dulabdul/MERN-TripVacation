const router = require('express').Router();
const auth = require('../middlewares/auth');
const adminController = require('../controller/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');

router.get('/login', adminController.viewLogin);
router.post('/login', adminController.actionLogin);
router.use(auth);
router.get('/logout', adminController.actionLogout);
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
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// End of Endpoint Item
// Endpoint Featured
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/featured', upload, adminController.addFeatured);
router.put('/item/update/featured', upload, adminController.editFeatured);
router.delete('/item/:itemId/featured/:id', adminController.deleteFeatured);
// End of Featured

// Endpoint Activity
router.post('/item/add/activity', upload, adminController.addActivity);
router.put('/item/update/activity', upload, adminController.editActivity);
router.delete('/item/:itemId/activity/:id', adminController.deleteActivity);
// End of Endpoint Activity
router.get('/booking', adminController.viewBooking);
router.get('/booking/:id', adminController.viewBookingDetail);
router.put('/booking/:id/confirmation', adminController.actionConfirmation);
router.put('/booking/:id/reject', adminController.actionReject);
module.exports = router;
