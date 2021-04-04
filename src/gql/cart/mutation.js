import { gql } from "@apollo/client";

const ADD_CART_PRODUCT = gql`
  mutation updateCart($cartId: ID!, $cartproductId: ID!) {
    updateCart(cartId: $cartId, cartproductId: $cartproductId) {
      id
    }
  }
`;
const DELETE_CARTPRODUCT = gql`
  mutation deleteCartproduct($cartproductId: ID!) {
    deleteCartproduct(cartproductId: $cartproductId) {
      id
    }
  }
`;
export { ADD_CART_PRODUCT, DELETE_CARTPRODUCT };
