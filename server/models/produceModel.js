import mongoose from "mongoose";


const produceSchema = new mongoose.Schema(
    {
        produceName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        totalUnit: {
            type: Number,
            required: true,
        },
        remainingUnit: {
            type: Number,
            required: true,
            default: this.totalUnit
        },
        image1: {
            publicId: String,
            url: String,
            required: true,
        },
        image2: {
            publicId: String,
            url: String,
            required: true,
        },
        image3: {
            publicId: String,
            url: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            enum: ["crops", "livestock"],
            required: true,
        },
    },
    { timestamps: true }
);


const Produce = mongoose.model("Produce", produceSchema);
export default Produce;