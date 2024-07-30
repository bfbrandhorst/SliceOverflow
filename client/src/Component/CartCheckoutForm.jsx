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
import { useMutation, useQuery } from "@apollo/client";
import { CHECKOUT, GET_CART_ITEMS } from "../utils/queries";
import { ADD_ORDER } from "../utils/mutations";
import Auth from "../utils/auth";

const CartCheckoutForm = () => {
  const { loading, data } = useQuery(GET_CART_ITEMS);
  const cartItems = data?.cartItems || [];
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkout] = useMutation(CHECKOUT);
  const [addOrder] = useMutation(ADD_ORDER);

  const handleCheckout = async () => {
    try {
      const { data } = await checkout({
        variables: {
          pizzas: cartItems.map((item) => ({
            pizza: item.pizza._id,
            quantity: item.quantity,
            size: item.size,
          })),
        },
      });
      // Handle successful checkout (e.g., redirect to a success page)
      console.log(data.checkout.session);
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err.message || "Something went wrong with your checkout!"
      );
      setShowAlert(true);
    }
  };

  const handleAddOrder = async () => {
    try {
      await addOrder({
        variables: {
          pizzas: cartItems.map((item) => ({
            pizza: item.pizza._id,
            quantity: item.quantity,
            size: item.size,
          })),
        },
      });
      // Handle successful order placement (e.g., clear cart)
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err.message || "Something went wrong with placing your order!"
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
          {cartItems.map((item, index) => (
            <div key={item.pizza._id}>
              <ListItem>
                <ListItemText
                  primary={`${item.pizza.name} (${item.size})`}
                  secondary={`Quantity: ${item.quantity} - Price: $${item.pizza.price}`}
                />
              </ListItem>
              {index < cartItems.length - 1 && <Divider />}
            </div>
          ))}
        </List>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddOrder}
          >
            Place Order
          </Button>
        </Box>
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
