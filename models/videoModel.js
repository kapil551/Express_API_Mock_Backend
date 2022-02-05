const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: String,
        subscribers: Number,
        image: String,
        views: Number,
        date: Date,
        description: {
            type: String,
            minLength: [10],
            maxLength: [100],
        },
    },
    { timestamps: true }
)

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;