import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('Trying to connect...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected!");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;