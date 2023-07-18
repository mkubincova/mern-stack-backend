import { Document, Model } from 'mongoose';

export interface IUser {
    email: String,
    password: String;
}

export interface IUserDocument extends IUser, Document { }

export interface IUserModel extends Model<IUserDocument> {
    // types for statics (added to model)
    // buildUser(args: IUser): IUserDocument;
}