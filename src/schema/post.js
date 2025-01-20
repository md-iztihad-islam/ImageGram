import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
        minlength: 5
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, //in mongoDB when we create a collection, inside the collection we create documents and every documents has unique id which is a hexadecimal object id
        ref: "User" //referring to the User collection
    }
}, { timestamps: true });

const post = mongoose.model("Post", postSchema); //post collection

export default post;