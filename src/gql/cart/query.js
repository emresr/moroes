import { gql } from "@apollo/client";

const GET_CART = gql`
  query Cart($id: ID!) {
    cart(id: $id) {
      id
      cartproducts {
        product {
          name
        }
        amount
      }
      total
    }
  }
`;

export { GET_CART };
