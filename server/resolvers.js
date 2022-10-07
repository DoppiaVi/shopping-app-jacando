import Item from "./models/Item.js";
import Order from "./models/Order.js";

const resolvers = {
  Query: {
    getItems: async (root, args) => {
      const items = await Item.find();

      return items;
    },
    getFruits: async (root, args) => {
      const items = await Item.find((item) => item.kind == "fruit");

      return items;
    },
    getVegetables: async (root, args) => {
      const items = await Item.find((item) => item.kind == "vegetable");

      return items;
    },
    getCheeses: async (root, args) => {
      const items = await Item.find((item) => item.kind == "cheese");

      return items;
    },
  },
  Mutation: {
    addOrder: async (root, args) => {
      const newOrder = new Order({
        totalPrice: args.totalPrice,
        items: args.items,
      });
      await newOrder.save();
      return newOrder;
    },
    updateItem: async (root, args) => {
      const { id, price, description, amount, kind } = args;

      const updateItem = {};

      if (price !== undefined) {
        updateItem.price = price;
      }

      if (description !== undefined) {
        updateItem.description = description;
      }

      if (kind !== undefined) {
        updateItem.kind = kind;
      }

      if (amount !== undefined) {
        updateItem.amount = amount;
      }

      const item = await Item.findByIdAndUpdate(
        id,
        { price, description, amount, kind },
        { new: true }
      );

      return item;
    },
  },
};

export default resolvers;
