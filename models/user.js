import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: String,
    password: String,
    otp:{
        type:Number,
        required:[true,"otp required"]
    },
    verified:Boolean,
})

const User = models.User || model('User', userSchema);

export default User;