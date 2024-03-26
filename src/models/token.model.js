"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
//token model

const TokenSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel',
        required: true,
        index: true, //daha hilzi verilere ulasmak icin, sql veri tabanalridna onemlidir
        unique: true,
    },
    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true,
    },
}, {
    collection: 'tokens',
    timestamps: true
})

/*----------------------------------*/

module.exports = mongoose.model('Token', TokenSchema)