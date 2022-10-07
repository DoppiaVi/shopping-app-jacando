import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Item {
    id: ID
    price: Int
    description: String
    amount: Int
    kind: String
  }
  type Order {
    id: ID
    totalPrice: Int
    items: [Item]
  }
  type Query {
    getItems: [Item]
    getFruits: [Item]
    getVegetables: [Item]
    getCheeses: [Item]
  }
  type Mutation {
    addOrder(totalPrice: Int, items: [Item]): Order

    updateItem(
      id: ID
      price: Int
      description: String
      amount: Int
      kind: String
    ): Item
  }
`;

export default typeDefs;
