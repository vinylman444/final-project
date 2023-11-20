import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema({
    Name: {type: String, required: true},
    Condition: {type: String, required: false},
    Cost: {type: Number, required: false},
    Description: {type: String, required: false},
    Image: {type: String, required: false}
});

const Games = mongoose.models.Games || mongoose.model('Games', gameSchema);

export default Games;