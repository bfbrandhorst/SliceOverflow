import React from 'react'
import { orderTotal } from './Checkout'
import { Container, Typography, Box } from "@mui/material";

const total = orderTotal()

const CheckoutResult = () => {
return (
    <div>
    <Container maxWidth="sm">
        <Box textAlign="center" mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
            Thank you for your purchase!
            </Typography>
        </Box>
    </Container>
    </div>
)
}
export default CheckoutResult