import User from '../models/user.model.js';     
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signupController = async(req, res, next) => {
    const {username , email , password } = req.body;  
    const hashedpassword = await bcryptjs.hashSync(password, 10);     
    const newUser = new User({ username, email, password: hashedpassword });    
    try {
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' }); 
    } catch (error) {
        next(error);
    }

}

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
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        next(error);
    }
};