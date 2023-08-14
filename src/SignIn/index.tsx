import React, { useReducer } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
import { IState, EACTIONS, TPayloadKeys, IProps } from "./types";
import { signIn } from "../utils/requests";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn: React.FC<IProps> = (props) => {
  const { setIsAuthenticated } = props;
  const initialState: IState = {
    access_token: "",
    clicked: false,
    email: "",
    password: "",
    showPassword: false,
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showPassword, email, password, error } = state;
  const handleSubmit = async () => {
    try {
      const { data } = await signIn({
        email: state.email,
        password: state.password,
      });

      if (!data?.data) {
        dispatch({
          type: EACTIONS.SIGN_IN_ERROR,
          payload: {
            error: data?.errors?.[0]?.message,
          },
        });

        return;
      }
      const access_token = data?.data?.auth?.access_token;
      setIsAuthenticated(access_token);
      localStorage.setItem("access_token", access_token);
      navigate("/dashboard");
    } catch (error: any) {
      dispatch({
        type: EACTIONS.SIGN_IN_ERROR,
        payload: {
          error: error?.message,
        },
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: EACTIONS.INPUT_CHANGE,
      payload: {
        [name as TPayloadKeys]: value,
        error: "",
      },
    });
  };
  const togglePasswordVisibility = () => {
    dispatch({
      type: EACTIONS.INPUT_CHANGE,
      payload: {
        showPassword: !showPassword,
      },
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputChange(event);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            // type="password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputChange(event);
            }}
          />
          <Typography variant="subtitle1" color="#FF0000">
            {error}
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default SignIn;
