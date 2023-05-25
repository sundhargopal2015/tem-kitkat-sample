import React from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { Search } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const handleLogin = (event) => {
    navigate("/Login");
  };
  const handleSignUp = (event) => {
    navigate("/Signup");
  };

  return (
    <Container style={{ paddingTop: "24px" }}>
      <Grid display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" componet="h3">
          Vanga Sapadalam
        </Typography>
        <TextField
          style={{ minWidth: "600px", cursor: "pointer" }}
          id="outlined-basic"
          variant="outlined"
          InputProps={{ endAdornment: <Search /> }}
        />
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="12px"
        >
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" onClick={handleSignUp}>
            SignUp
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
