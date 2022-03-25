const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId 

const reviewSchema = new mongoose.Schema({
    bookId: {
        type : ObjectId,
        refs : "bookDetails",
        required : true
    },
    reviewedBy: {
        type : String,
        required : true,
        default : 'Guest',
        value: "reviewer's name"
    },
    reviewedAt: {
        type : Date,
        required : true
    },
    rating: {
        type : Number,
        min : [1, "rating can"],
        max : 5,
        required : true
    },
    review: {String},
    isDeleted: {
        typr : Boolean,
        default: false
    }
},{ timestamps: true });


module.exports = mongoose.model('reviewDetail', reviewSchema)