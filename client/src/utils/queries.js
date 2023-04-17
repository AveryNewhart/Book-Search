import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    token
    me {
      _id
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;