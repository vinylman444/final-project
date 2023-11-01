import mongoose from 'mongoose';

const { Schema } = mongoose;

const Game = new Schema({
    Name: {type: String, required: true},
    Condition: {type: String, required: false},
    cost: {type: Number, required: false},
    Description: {type: String, required: false},
    Image: {type: String, required: false}
});

const Location = new Schema({
    Name: {type: String, required: true},
    description: {type: String, required: false},
    Image: {type: String, required: false},
    Games: {type: [Game], required: true}
});

const User = new Schema({
  Username: {type: String, required: true},
  Password: { type: String, required: true },
  Games: {type: [Game], required: true},
  locations: {type: [Location], required: true}
});


const Reviews = mongoose.model('Reviews', reviewSchema);

console.log(process.env.DSN);

const mongooseOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hw04', mongooseOpts);

    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectToDatabase();

export default Reviews;