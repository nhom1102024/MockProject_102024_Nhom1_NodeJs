const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (email, password) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('Email đã được sử dụng');
  }


  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  return { message: 'Đăng ký thành công' };
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Email hoặc mật khẩu không đúng');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Email hoặc mật khẩu không đúng');
  }

  const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token };
};

module.exports = { register, login };
