import { gql } from "@apollo/client";

export const ADD_ORDER = gql`
  mutation addOrder($totalPrice: Int, $items: [Item) {
    addOrder(totalPrice: $totalPrice, items: $items) {
      id
      totalPrice
      items {
        price
        description
        amount
        kind
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem(
    $id: ID
    $price: Int
    $description: String
    $amount: Int
    $kind: String
  ) {
    updateItem(
      id: $id
      price: $price
      description: $description
      amount: $amount
      kind: $kind
    ) {
      id
      price
      description
      amount
      kind
    }
  }
`;
