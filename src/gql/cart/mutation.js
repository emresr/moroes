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
const CREATE_ORDER = gql`
   mutation createOrder($cartId: ID!) {
      createOrder(cartId: 1) {
         id
      }
   }
`;
export { ADD_CART_PRODUCT, DELETE_CARTPRODUCT, CREATE_ORDER };
