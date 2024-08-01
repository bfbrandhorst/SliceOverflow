import React, { useState } from "react";
import {
  TextField,
  Button,
  Alert,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUpForm = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong with your signup!");
      setShowAlert(true);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        noValidate
        validated={validated.toString()}
        onSubmit={handleFormSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        {showAlert && (
          <Alert severity="error" onClose={() => setShowAlert(false)}>
            {errorMessage}
          </Alert>
        )}
        <TextField
          margin="normal"
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="first-name"
          autoFocus
          value={userFormData.firstName}
          onChange={handleInputChange}
          required
        />
        <TextField
          margin="normal"
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="last-name"
          value={userFormData.lastName}
          onChange={handleInputChange}
          required
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={userFormData.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={userFormData.password}
          onChange={handleInputChange}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={
            !(
              userFormData.firstName &&
              userFormData.lastName &&
              userFormData.email &&
              userFormData.password
            )
          }
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpForm;
