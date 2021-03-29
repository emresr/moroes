import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation ProductMutation($name: String!, $price: Float!) {
    createProduct(name: $name, price: $price) {
      id
      name
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
export { CREATE_PRODUCT, DELETE_PRODUCT };
