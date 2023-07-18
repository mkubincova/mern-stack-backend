import { Schema, model } from 'mongoose';
import { IUserDocument, IUserModel } from '../interfaces/IUser';
import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema: Schema<IUserDocument> = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// static signup method
UserSchema.statics.signup = async function (email: string, password: string) {

    // validation
    if (!email || !password) throw Error('All fields are required');
    if (!validator.isEmail(email)) throw Error('Email is not valid');
    if (!validator.isStrongPassword(password)) throw Error('Password is not strong enough.');

    const exists = await this.findOne({ email });
    if (exists) throw Error('Email already in use');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash });

    return user;
};

// static login method
UserSchema.statics.login = async function (email: string, password: string) {

    // validation
    if (!email || !password) throw Error('All fields are required');

    const user = await this.findOne({ email });
    if (!user) throw Error('Incorrect email');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw Error('Incorrect password');

    return user;
};

const User = model<IUserDocument, IUserModel>('User', UserSchema);

export default User;