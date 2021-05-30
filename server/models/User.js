import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    middleName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    boughtTickets: [{type: Schema.Types.ObjectId}],
    role: {type: String, required: true}
})

export default model("User",schema);