const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Mentor = require('../models/Mentor');
const Admin = require('../models/Admin');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    let user;
    if (role === 'admin') {
      user = await Admin.create({ name, email, password: hashedPassword });
    } else {
      user = await Mentor.create({ name, email, password: hashedPassword });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user;
    if (role === 'admin') {
      user = await Admin.findOne({ where: { email } });
    } else {
      user = await Mentor.findOne({ where: { email } });
    }

    if (!user) {
      throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Unable to login');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: 'Unable to login' });
  }
};

const logout = (req, res) => {
  // Handle logout logic here, typically involves token invalidation
  res.send({ message: 'Logged out successfully' });
};

const getAllAdmins = async (req, res) => {
  const admins = await Admin.findAll();
  res.send(admins);
};

const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  await Admin.destroy({ where: { id } });
  res.send({ message: 'Admin deleted successfully' });
};

module.exports = { register, login, logout, getAllAdmins, deleteAdmin };
