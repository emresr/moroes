import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      name
      price
    }
  }
`;
const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      price
    }
  }
`;
export { GET_PRODUCT, GET_PRODUCTS };
