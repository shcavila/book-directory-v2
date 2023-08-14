import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { IProps } from "./types";
import { Alert } from "@mui/material";

const Toast: React.FC<IProps> = (props) => {
  const { isOpen, message, severity, handleClose } = props;

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => handleClose}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => handleClose}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Toast;
