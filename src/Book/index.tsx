import React from "react";
import FormComponent from "../components/Form";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { addBook, updateBook } from "../utils/requests";
import { IBookDetails } from "../Dashboard/types";
import { THandlersKeys } from "./types";

const BookComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const passedProps = location.state;
  const { title, operation, book = {} } = passedProps;
  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleAddBook = async (data: IBookDetails) => {
    try {
      await addBook(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("ERROR IN ADDING BOOK", error);
    }
  };
  const handleUpdateBook = async (data: IBookDetails) => {
    try {
      await updateBook(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("ERROR IN UPDATING BOOK", error);
    }
  };

  const handlers = {
    update: handleUpdateBook,
    add: handleAddBook,
  };
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <FormComponent
          title={title}
          data={book}
          handleCancel={() => handleCancel()}
          handleSubmit={(e: IBookDetails) =>
            handlers[operation as THandlersKeys](e)
          }
        />
      </Container>
    </>
  );
};

export default BookComponent;
