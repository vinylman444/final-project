import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema({
    Name: {type: String, required: true},
    Condition: {type: String, required: false},
    cost: {type: Number, required: false},
    Description: {type: String, required: false},
    Image: {type: String, required: false}
});

const locationSchema = new Schema({
    Name: {type: String, required: true},
    description: {type: String, required: false},
    Image: {type: String, required: false},
    Games: {type: [Game], required: true}
});

const userSchema = new Schema({
  Username: {type: String, required: true},
  Password: { type: String, required: true },
  Games: {type: [Game], required: true},
  locations: {type: [Location], required: true}
});


const Game = mongoose.model('Game', gameSchema);
const Location = mongoose.model('Location', locationSchema);
const User = mongoose.model('User', userSchema);
