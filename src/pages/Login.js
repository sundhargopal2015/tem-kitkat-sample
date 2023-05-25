import React from "react";
import {
  Avatar,
  Container,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Login = () => {
  const defaultTheme = createTheme({});
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ backgroundColor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" component="h5">
          Sign in
        </Typography>
        <Box componet="form" sx={{ mt: 1 }}>
          <TextField
            required
            autoFocus
            fullWidth
            autoComplete="email"
            id="email"
            label="Email Address"
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            required
            id="password"
            type="password"
            label="Password"
            name="password"
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button fullWidth variant="contained">
            LOG IN
          </Button>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Grid item xs>
              <Link to="/Forgot">Forgot password</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">Create new account</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
