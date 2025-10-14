import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'seller'], default: "user" },
    number: { type: Number, default: '' },
    gender: { type: String, default: '' },
    dateOfBirth: { type: String, default: '' },
    location: { type: String, default: '' },
    alternateNumber: { type: String, default: '' }



}, { timestamps: true })



const User = mongoose.model('User', userSchema)


export default User