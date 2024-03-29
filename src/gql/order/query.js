import { gql } from "@apollo/client";

const GET_ORDER = gql`
   query Order($id: ID!) {
      order(id: $id) {
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
const GET_ORDERS = gql`
   query Orders($picked: Boolean!) {
      orders(picked: $picked) {
         id
         ready
         cart {
            total
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
export { GET_ORDERS, GET_ORDER };
