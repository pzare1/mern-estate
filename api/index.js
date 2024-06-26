import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Routes/user.route.js';
import authRouter from './Routes/auth.route.js'

dotenv.config();

const app = express();
const PORT = 3000

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("connected to db")
})
.catch((err) => {
    console.log(err)
});

app.use(express.json());    

app.listen(PORT,() => {
    console.log('server is running');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use((err, req , res , next) => {
    const statusCode = err.statusCode || 500;   
    const message = err.message || 'Internal server error'; 
    return res.status(statusCode).json({
        success: false, 
        statusCode,
        message,
    });
})