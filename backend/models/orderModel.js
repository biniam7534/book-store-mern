import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        payment: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "Processing",
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
