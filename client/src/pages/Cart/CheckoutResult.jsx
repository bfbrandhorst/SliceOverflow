import React from 'react'
import { orderTotal } from './Checkout'

const CheckoutResult = () => {
return (
    <div>

        <h2>Thank you for your purchase!</h2>
        <h2>Your total is {orderTotal}</h2>

    </div>
)
}
export default CheckoutResult