import { gql } from "@apollo/client";

const GET_CART_PRODUCTS = gql`
  subscription NewCartProduct($cartId: ID!) {
    newCartProduct(cartId: $cartId) {
      id

      product {
        name
      }
      amount
    }
  }
`;

export { GET_CART_PRODUCTS };
