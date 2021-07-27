const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const Auth = require('../middleware/Auth');

const route = express.Router();

route.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status('400').json({ msg: 'No such user' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status('400').json({ msg: 'Wrong Password' });
    }

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
  } catch (error) {
    console.log(error.message);
    res.status('500').json({ msg: 'Server Error' });
  }
});

//ediit user info
route.post('/', Auth, async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.user.id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!user) {
      return res.status(400).json({ msg: 'no such user exists' });
    }
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.status('500').json({ msg: 'Server Error' });
  }
});
module.exports = route;
