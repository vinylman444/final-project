import mongoose from "mongoose";

const { Schema } = mongoose;

const locationSchema = new Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: false},
    Image: {type: String, required: false},
    Games: [{ type: Schema.Types.ObjectId, ref: 'Games', required: false }],
    XCoord: {type: Number, required: false},
    YCoord: {type: Number, required: false}
});
const Locations = mongoose.models.Locations || mongoose.model('Locations', locationSchema);

export default Locations;
