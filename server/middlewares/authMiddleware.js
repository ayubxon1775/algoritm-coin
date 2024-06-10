const jwt = require('jsonwebtoken');
const Mentor = require('../models/Mentor');
const Admin = require('../models/Admin');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const teacher = await Mentor.findByPk(decoded.id);
    const admin = await Admin.findByPk(decoded.id);


    if (!teacher && !admin) {
      throw new Error();
    }

    req.user = teacher || admin;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send({ error: 'Access denied.' });
  }
  next();
};

const isTeacher = (req, res, next) => {
  if (req.user.role !== 'teacher') {
    return res.status(403).send({ error: 'Access denied.' });
  }
  next();
};

module.exports = { authenticate, isAdmin, isTeacher };
