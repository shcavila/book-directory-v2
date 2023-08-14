import axios from "axios";
import { ICredential } from "../../SignIn/types";
import { IBookDetails } from "../../Dashboard/types";

const endpoint = "http://localhost:3001/graphql";
const signIn = ({ email, password }: ICredential) => {
  const headers = {
    "content-type": "application/json",
  };
  const graphqlQuery = {
    query: `query auth($email:String!, $password:String!){
         auth(email:$email, password:$password) {
          access_token
         }
      }`,
    variables: {
      email,
      password,
    },
  };

  return axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });
};

const updateBook = (data: IBookDetails) => {
  const access_token = localStorage.getItem("access_token");

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${access_token}`,
  };
  const graphqlQuery = {
    query: `mutation book($updateBookInput:UpdateBookInput!){
         updateBook(updateBookInput:$updateBookInput) {
            id
            title
            author
         }
      }`,
    variables: {
      updateBookInput: data,
    },
  };

  return axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });
};
const addBook = (data: IBookDetails) => {
  const access_token = localStorage.getItem("access_token");

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${access_token}`,
  };
  const graphqlQuery = {
    query: `mutation book($createBookInput:CreateBookInput!){
         createBook(createBookInput:$createBookInput) {
            id
            title
            author
         }
      }`,
    variables: {
      createBookInput: data,
    },
  };

  return axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });
};

const getBooks = () => {
  const access_token = localStorage.getItem("access_token");

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${access_token}`,
  };
  const graphqlQuery = {
    query: `query books{
         books{
            id
            title
            author
         }
      }`,
  };

  return axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });
};

const getBook = (id: string) => {
  const access_token = localStorage.getItem("access_token");

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${access_token}`,
  };
  const graphqlQuery = {
    query: `query book($id:id){
         books{
            id
            title
            author
         }
      }`,
    variables: {
      id,
    },
  };

  return axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });
};

const deleteBook = (id: string) => {
  const access_token = localStorage.getItem("access_token");

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${access_token}`,
  };
  const graphqlQuery = {
    query: `mutation book($id:ID!){
      deleteBook(id:$id){
            id
            title
            author
         }
      }`,
    variables: {
      id,
    },
  };

  return axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphqlQuery,
  });
};
export { signIn, updateBook, addBook, getBooks, getBook, deleteBook };
