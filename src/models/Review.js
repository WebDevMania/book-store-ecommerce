import mongoose from "mongoose"

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    desc: {
        type: String,
        required: true,
        min: 8
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bookId: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose?.models?.Review || mongoose.model("Review", ReviewSchema)