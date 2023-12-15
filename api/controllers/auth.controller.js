import User from '../models/user.model.js';     
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

export const signupController = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        // Check if the username or email is already in use
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Handle validation errors separately
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        next(error);
    }
};

export const signinController = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1d' });
        const { password : pass, ...others } = user._doc;
        res.cookie('access_token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', others });
    } catch (error) {
        next(error);
    }
};