

import mongoose from 'mongoose';


const BookVideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    videoUrl : {
        type: String,
        required: true,
        trim: true
    },

    publicId : {
        type: String,
        required: true,
        trim: true
    }
})


const BookSchema = new mongoose.Schema({

    instructTurName : {
        type: String,
        required: true,
        trim: true
    },
    date : Date,


    title: {
        type: String,
        required: true,
        trim: true
    },

    subtitle: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    language: {
        type: String,
        required: true,
        trim: true
    },

    level: {
        type: String,
        required: true,
        trim: true
    },

    objectives: {
        type: String,
       
        trim: true
    },
    welcomeMessage: {
        type: String,
        trim: true
    },

    image: {
        type: String,
        required: true,
        trim: true
    },

    video : [BookVideoSchema]


})



const BookModel = mongoose.model('BookModel', BookSchema);

export default BookModel;