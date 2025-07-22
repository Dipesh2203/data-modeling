import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    description: {
        type: String,  
        required: true,
    },name: {
        type:String,
        requrire: true
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },      
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    catogory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User',
        required: true 
    },

},{timestamps: true});

export const User = mongoose.model('Product', productSchema);