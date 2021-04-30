import { gql } from "@apollo/client";

const ME = gql`
   query Me {
      me {
         id
         activeCart
      }
   }
`;
const GET_USERS = gql`
   {
      users {
         id
         email
      }
   }
`;
const GET_USER = gql`
   query User($id: ID!) {
      user(id: $id) {
         email
         order
      }
   }
`;
export { GET_USERS, GET_USER, ME };
