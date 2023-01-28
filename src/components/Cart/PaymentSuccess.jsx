import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const PaymentSuccess = () => {
  return (
    <section className="paymentsuccess">
        <motion.main initial={{
                x: "-100vw",
                opacity: 0,
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}>
            <h1>Order Confirmed</h1>
            <p>Order Placed successfully, You can check order status</p>
            <Link to="/myorders">Check status</Link>
        </motion.main>
    </section>
  )
}

export default PaymentSuccess