const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const protect = require('../middleware/validateToken');

userRouter.get("/", async (req,res) => {
    try{
        const users = await User.find();
        if(!users){
          return res.status(404).json({ message: "User not found"})
        }
        res.json(users);
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
})

// Sign up user
userRouter.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' });
  }
});

// Login user
userRouter.post('/login', async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong Password' });
    }
    const expiresIn = rememberMe ? '7d' : '1d';
    
    const token = jwt.sign( { id: user._id }, process.env.JWT_SECRET, { expiresIn });
    res.json({ token, expiresIn });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user data
userRouter.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update password
userRouter.put('/update-password', protect, async (req, res) => {
    try {
        const { password } = req.body;
        
        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const user = await User.findById(req.user.id);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        await user.save();
        
        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = userRouter;




