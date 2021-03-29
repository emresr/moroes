import { gql } from "@apollo/client";

const NEW_ORDER = gql`
  subscription {
    newOrder {
      id
      ready
      cart {
        id
        user {
          email
        }
        cartproducts {
          amount
          product {
            name
          }
        }
      }
    }
  }
`;

export { NEW_ORDER };
