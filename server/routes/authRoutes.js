const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/users', authController.getAllAdmins);
router.delete('/users/:id', authController.deleteAdmin);
module.exports = router;
