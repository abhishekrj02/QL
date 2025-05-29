const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const user = new User({ email, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
