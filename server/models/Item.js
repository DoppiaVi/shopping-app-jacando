import mongoose, { Schema } from "mongoose";

const options = { discriminatorKey: "kind" };

const itemSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
  },
  options
);

const Item = mongoose.model("item", itemSchema);

export default Item;
