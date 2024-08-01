import React, { useState } from "react";
import { handleCheckout } from "../pages/Cart/handleCheckout";
import { useNavigate } from "react-router-dom";
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

  const filteredCart = cart.filter(item => item.quantity > 0);

  const navigate = useNavigate();

  const handleCheckout = () => {navigate("/checkoutResult")}

  const totalPrice = filteredCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalWithTax = totalPrice * 1.0825

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
          {filteredCart.map((item, index) => (
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

        <Typography variant="h6" component="p" align="right">
          Total: ${totalPrice.toFixed(2)}<br></br>
          Total with Tax: ${totalWithTax.toFixed(2)}
        </Typography>

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
