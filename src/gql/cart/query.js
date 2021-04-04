import { gql } from "@apollo/client";

const GET_CART = gql`
  query Cart($id: ID!) {
    cart(id: $id) {
      id
      cartproducts {
        id
        product {
          name
          price
        }
        amount
      }
      total
    }
  }
`;

export { GET_CART };
