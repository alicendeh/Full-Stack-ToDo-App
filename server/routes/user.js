const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const route = express.Router();

route.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status('400').json({ msg: 'This User Already exist' });
    }
    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(11);

    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    await jwt.sign(payload, 'todo', { expiresIn: 36000 }, (err, token) => {
      if (err) {
        throw err;
      }
      res.json({ token });
    });
  } catch (err) {
    res.status('500').json({ msg: 'Server Error' });
  }
});

module.exports = route;
