import React, { useState } from "react";
import {
  Container,
  Avatar,
  Typography,
  Box,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { makeRequest } from "../http/makeRequest";
const usertypes = ["consumer", "seller", "deliveryAgent"];

const SignUp = () => {
  const [userType, setUserType] = useState(usertypes);
  const [deliveryAgentLangs, setDeliveryAgentLangs] = useState([]);
  const [showSeller, setShowSeller] = useState(false);
  const [showAgent, setShowAgent] = useState(false);
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    if (event.target.value === "seller") {
      setShowSeller(true);
    } else {
      setShowSeller(false);
    }
  };

  const handleDeliveryAgentLangsChange = (event) => {
    setDeliveryAgentLangs((pre) => [...pre, ...event.target.value]);
  };
  const userCreateCallback = (response) => {
    console.log(response);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const userData = {
      firstName: event.target.FirstName.value,
      lastName: event.target.Lastname.value,
      Email: event.target.email.value,
      Password: event.target.password.value,
      MobileNo: event.target.MobileNo.value,
      userType: userType,
    };
    makeRequest("post", "users", userData, userCreateCallback);
  };
  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <Avatar style={{ backgroundColor: "#9c27b0" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography>Sign Up</Typography>
      <Box componet="form">
        <Grid display="flex" gap="12px" onSubmit={handleRegister}>
          <TextField
            required
            autoFocus
            autoComplete
            id="FirstName"
            label="Firstname"
            sx={{ mb: 1 }}
          />
          <TextField required id="Lastname" label="Lastname" />
        </Grid>
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
          style={{ marginBottom: "5px" }}
        />
        <TextField
          required
          autoFocus
          type="number"
          fullWidth
          id="MobileNo"
          label="Mobile No"
          style={{ marginBottom: "5px" }}
        />
        <TextField
          fullWidth
          autoFocus
          type="textarea"
          id="address"
          label="Address"
          name="address"
          style={{
            marginBottom: "5px",
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="user-type-label">User type</InputLabel>
          <Select
            labelId="user-type-label"
            id="user-type"
            value={userType}
            label="User type"
            onChange={handleUserTypeChange}
          >
            {usertypes.map((data) => {
              return <MenuItem value={data}>{data}</MenuItem>;
            })}
          </Select>
        </FormControl>
        {showSeller && (
          <>
            <TextField
              required={userType === "seller"}
              fullWidth
              autoFocus
              id="restaurantName"
              label="Restaurant name"
              name="restaurantName"
              sx={{
                mb: 1,
                mt: 1,
              }}
            />
            <TextField
              required={userType === "seller"}
              fullWidth
              autoFocus
              type="textarea"
              id="restaurantAddress"
              label="Restaurant Address"
              name="restaurantAddress"
              sx={{
                mb: 1,
                mt: 1,
              }}
            />
          </>
        )}
        {showAgent && (
          <>
            <TextField
              required={userType === "deliveryAgent"}
              fullWidth
              autoFocus
              id="deliveryAgentName"
              label="Delivery agent name"
              name="deliveryAgentName"
              sx={{
                mb: 1,
                mt: 1,
              }}
            />
            <TextField
              required={userType === "deliveryAgent"}
              fullWidth
              autoFocus
              id="deliveryAgentMNo"
              label="Delivery agent mobile no"
              name="deliveryAgentMNo"
              sx={{
                mb: 1,
                mt: 1,
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="user-type-label">
                Delivery agent known languages
              </InputLabel>
              <Select
                labelId="delivery-agent-known-lang-label"
                id="delivery-agent-known-lang"
                value={deliveryAgentLangs}
                label="Delivery agent known languages"
                onChange={handleDeliveryAgentLangsChange}
                multiple
              >
                <MenuItem value={"ta"}>Tamil</MenuItem>
                <MenuItem value={"ka"}>Kannada</MenuItem>
                <MenuItem value={"hin"}>Hindi</MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="I agree to the terms and conditions"
        />
        <Button type="submit" fullWidth variant="contained">
          Register
        </Button>
        <Grid
          container
          sx={{
            justifyContent: "end",
            mt: 1,
          }}
        >
          <Grid item>
            <Link to="/Login">Already have an account login</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default SignUp;
