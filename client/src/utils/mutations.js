import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser( email: $email, password: $password ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser( username: $username, email: $email, password: $password ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String], $description: String, $title: String, $bookId: ID, $image: String, $link: String) {
        saveBook( authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link ) {
            _id
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook( bookId: $bookId ) {
            _id
            authors
            title
            bookId
            image
            link
        }
    }
`;
