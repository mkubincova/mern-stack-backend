import { Schema, model } from 'mongoose';
import { IUser, IUserDocument, IUserModel } from '../interfaces/IUser';

const UserSchema: Schema<IUserDocument> = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// register function with types
// UserSchema.statics.buildUser = (args: IUser) => {
//     return new User(args);
// };

const User = model<IUserDocument, IUserModel>('User', UserSchema);

export default User;