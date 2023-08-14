import React, { useReducer } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import ConfirmationDialog from "../ConfirmationDialog";
import { EACTIONS, IProps } from "./types";
import reducer from "./reducer";

const initialState = {
  isOpen: false,
  id: "",
  isToastOpen: false,
  toast_message: "",
};

const TableComponent: React.FC<IProps> = (props) => {
  const { data = [], headers, handleUpdate, handleDeleteBook } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen, id } = state;
  const toggleConfirmation = (id: string) => {
    dispatch({
      type: EACTIONS.TOOGLE_DIALOG,
      payload: {
        isOpen: !isOpen,
        id,
      },
    });
  };

  const handleDelete = (id: string) => {
    handleDeleteBook(id);
    dispatch({
      type: EACTIONS.TOOGLE_DIALOG,
      payload: {
        isOpen: !isOpen,
        id: "",
      },
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#BBDEFB", color: "white" }}>
              {headers.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow key={row?.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleUpdate(row)}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => {
                      toggleConfirmation(row?.id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmationDialog
        open={isOpen}
        onClose={() => {
          toggleConfirmation("");
        }}
        onConfirm={() => handleDelete(id)}
      />
    </>
  );
};

export default TableComponent;
