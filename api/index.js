import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Routes/user.route.js'

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

app.listen(PORT,() => {
    console.log('server is running');
})

app.use('/api/user', userRouter)