const User = require('../models/User');
const authService = require('../services/authService');
const { body, validationResult } = require ('express-validator');


exports.getAllUsers = async (req, res) => {
    try {
        const users = await authService.getAllUsers();
        if(users && users.length === 0) {
            res.json ({message: 'Users not found'});
        }else {
            res.status(201).json({ users });
        }
    }catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

exports.register = [
    body('username').isLength({ min: 3}).withMessage('Enter a valid username'),
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 6}).withMessage('Password must be at least 6 characters long'),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array() });
        const { username, email, password } = req.body;
        try {
            const {token, user} = await authService.register(username, email, password);
            res.cookie('token', token, {
                maxAge: 900000,
                httpOnly : true,
                secure: process.env.NODE_ENV === 'production',
            });
            res.status(201).json({ message: 'Registration successful', user});
        } catch (error){
            res.status(400).json( {error: error.message});
        }
    },
];
exports.login = [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').exists().withMessage('Something went wrong'),
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json
    ( { errors: errors.array() });

    const { email, password } = req.body;
    try {
        const {token, user} = await authService.login(email, password);
        res.cookie('token', token, {
            maxAge: 900000,
            httpOnly : true,
            secure: process.env.NODE_ENV === 'production',
        })
        res.status(201).json({ message: 'Login successful', user})
    }catch (err){
        res.status(400).json( { error: err.message});
    }
 }    
];

exports.logout = async(req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout seccussful'});
    }catch (error) {
        res.status(500).json ({error: 'Error logging out'});
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } })
        res.json({ message: 'Ma\'lumot muvaffaqiyatli o\'chirildi'});
    }catch (error){
        console.error('Xatolik:', error);
        res.status(500).json({ error: 'Ma\'lumotni o\'chirishda hatolik yuz berdi'});
    }
}