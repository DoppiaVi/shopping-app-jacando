import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  {
    getItems {
      id
      price
      description
      amount
      kind
    }
  }
`;

export const GET_CHEESES = gql`
  {
    getCheeses {
      id
      price
      description
      amount
      kind
    }
  }
`;

export const GET_FRUITS = gql`
  {
    getFruits {
      id
      price
      description
      amount
      kind
    }
  }
`;

export const GET_VEGETABLES = gql`
  {
    getVegetables {
      id
      price
      description
      amount
      kind
    }
  }
`;
