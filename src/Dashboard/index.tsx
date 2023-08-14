import React, { useEffect, useReducer } from "react";
import { Button, Container, Typography } from "@mui/material";
import TableComponent from "../components/Table";
import { useNavigate } from "react-router-dom";
import { deleteBook, getBooks } from "../utils/requests";
import AddIcon from "@mui/icons-material/Add";
import { EACTIONS, IBookDetails, IState } from "./types";
import reducer from "./reducer";

const headers = ["Title", "Author", "Actions"];
const initialState: IState = {
  books: [],
  error: "",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { books } = state;

  const handleAdd = () => {
    navigate("/book", {
      state: {
        title: "Add Book",
        operation: "add",
      },
    });
  };
  const handleUpdate = (book: IBookDetails) => {
    navigate("/book", {
      state: {
        title: "Edit Book Details",
        operation: "update",
        book,
      },
    });
  };

  const handleGetBooks = async () => {
    try {
      const { data } = await getBooks();
      dispatch({
        type: EACTIONS.GET_BOOKS,
        payload: {
          books: data?.data?.books,
        },
      });
    } catch (error: any) {
      dispatch({
        type: EACTIONS.GET_BOOK_ERROR,
        payload: {
          error: error?.message,
        },
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      handleGetBooks();
    } catch (error) {
      console.error("ERROR IN DELETING BOOK", error);
    }
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <Container>
      <Button
        type="button"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        startIcon={<AddIcon />}
        onClick={handleAdd}
      >
        Add
      </Button>
      <Typography variant="h5" gutterBottom>
        All Books
      </Typography>
      <TableComponent
        data={books}
        handleDeleteBook={handleDelete}
        handleUpdate={handleUpdate}
        headers={headers}
      />
    </Container>
  );
};

export default Dashboard;
