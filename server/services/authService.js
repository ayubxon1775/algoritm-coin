const Admin = require('../models/Admin');
const jwt = require('../utils/jwt');

exports.getAllAdmins = async () => {
  const users = await Admin.findAll();
  return users;
};

exports.register = async (username, email, password) => {
  const user = await Admin.create({ username, email, password });
  const token = jwt.generateToken(user.id);
  return {token, user};
};
