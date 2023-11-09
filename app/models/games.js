import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema({
    Name: {type: String, required: true},
    Condition: {type: String, required: false},
    cost: {type: Number, required: false},
    Description: {type: String, required: false},
    Image: {type: String, required: false}
});

const Locations = mongoose.models.Games || mongoose.model('Games', gameSchema);

export default Games;