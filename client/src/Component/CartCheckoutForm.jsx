import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
//import { useMutation, useQuery } from "@apollo/client";
import { getCart } from "../utils/localStorage"
//import Auth from "../utils/auth";

const CartCheckoutForm = () => {
  const { loading, data } = getCart();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cart = data?.cart || [];

  const handleCheckout = async () => {
    try {
      <Box>
        <h1>Hello</h1>
      </Box>

      // const { data } = await checkout({
      //   variables: {
      //     pizzas: cart.map((item) => ({
      //       pizza: item.pizza._id,
      //       quantity: item.quantity,
      //       price: item.price,
      //     })),
      //   },
      //});
      // Handle successful checkout (e.g., redirect to a success page)
      //console.log(data.checkout.session);
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err.message || "Something went wrong with your checkout!"
      );
      setShowAlert(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Checkout
        </Typography>
        {showAlert && (
          <Alert severity="error" onClose={() => setShowAlert(false)}>
            {errorMessage}
          </Alert>
        )}
        <List>
          {cart.map((item, index) => (
            <div key={item.pizza._id}>
              <ListItem>
                <ListItemText
                  primary={`${item.pizza.name}`}
                  secondary={`Quantity: ${item.quantity} - Price: $${item.pizza.price}`}
                />
              </ListItem>
              {index < cart.length - 1 && <Divider />}
            </div>
          ))}
        </List>

        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CartCheckoutForm;
