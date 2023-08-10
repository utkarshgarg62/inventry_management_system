const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        brand: {
            type: String,
            required: true,
            trim: true
        },
        unit: {
            type: Number,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        deletedAt: {
            type: Date,
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);                         