import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    Username: {type: String, required: true},
    Password: { type: String, required: true },
    Email: {type: String, required: true},
    Admin: {type: String, required: true}
  });

const Users = mongoose.models.Users || mongoose.model('Users', userSchema);

export default Users;