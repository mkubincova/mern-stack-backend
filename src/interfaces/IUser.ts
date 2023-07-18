import { Document, Model } from 'mongoose';

export interface IUser {
    email: string,
    password: string;
}

export interface IUserDocument extends IUser, Document { }

export interface IUserModel extends Model<IUserDocument> {
    // types for statics (added to model)
    signup: (email: string, password: string) => Promise<IUserDocument>;
    login: (email: string, password: string) => Promise<IUserDocument>;
}