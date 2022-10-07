import mongoose, { Schema } from "mongoose";
import Item from "./models/Item.js";

const orderSchema = new Schema(
  {
    totalPrice: {
      type: Number,
      required: true,
    },
    items: {
      type: [Item],
      required: true,
    },
  },
  options
);

const Order = mongoose.model("order", orderSchema);

export default Order;
