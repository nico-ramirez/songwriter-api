import mongoose from 'mongoose';
const { Schema } = mongoose;

var lyricsSchema = new Schema({
    position:  {
        type: Number,
        required: true
    },
    lyrics:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lyrics: [lyricSchema],
}, {
    timestamps: true
});