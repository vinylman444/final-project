import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    Username: {type: String, required: true},
    Password: { type: String, required: true },
    Games: {type: [Game], required: true},
    locations: {type: [Location], required: true}
  });

const Locations = mongoose.models.Users || mongoose.model('Users', userSchema);

export default Users;