import React, { useState } from "react";
import { handleCheckout } from "../pages/Cart/handleCheckout";

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

import { getCart } from "../utils/localStorage"

const CartCheckoutForm = () => {
  const cart = getCart();
  
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
            <div key={item._id}>
              <ListItem>
                <ListItemText
                  primary={`${item.name}`}
                  secondary={`Quantity: ${item.quantity} - Price: $${item.price}`}
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
