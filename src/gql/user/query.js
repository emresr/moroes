import { gql } from "@apollo/client";

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
    }
  }
`;
export { GET_USERS, GET_USER };
