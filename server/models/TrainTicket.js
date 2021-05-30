import {Schema, model} from "mongoose";

const schema = new Schema({
    startPoint: {type: String, required: true},
    endPoint: {type: String, required: true},
    cost: {type: Number, required: true},
    departureDay: {type: String, required: true},
    arrivalDay: {type: String, required: true},
    departureTime: {type: String, required: true},
    arrivalTime: {type: String, required: true},
    countOfSeats: {type: Number, required: true},
    transplants: [{type: String}]
})

export default model("TrainTicket",schema);