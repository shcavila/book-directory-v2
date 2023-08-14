import React, { useReducer } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { EACTIONS, IProps } from "./types";
import reducer from "./reducer";
import { TBookDetails } from "../../Dashboard/types";

const FormComponent: React.FC<IProps> = (props) => {
  const { title, data, handleCancel, handleSubmit } = props;

  const [state, dispatch] = useReducer(reducer, { book: data });
  const { book } = state;
  const { title: book_title, author } = book;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: EACTIONS.INPUT_CHANGE,
      payload: {
        book: {
          ...book,
          [name as TBookDetails]: value,
        },
      },
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>

      <TextField
        label="Book Title"
        fullWidth
        margin="normal"
        variant="outlined"
        required
        name="title"
        value={book_title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event);
        }}
      />
      <TextField
        label="Author"
        fullWidth
        name="author"
        type="author"
        margin="normal"
        variant="outlined"
        value={author}
        required
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event);
        }}
      />
      <Button
        type="button"
        variant="outlined"
        color="primary"
        sx={{ marginRight: 2 }}
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => {
          handleSubmit(book);
        }}
      >
        Submit
      </Button>
    </Container>
  );
};

export default FormComponent;
