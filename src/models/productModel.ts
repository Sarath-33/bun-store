import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
        minLength: 80,
        maxLength: 255
    }
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;