import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"
import { getOrderDetails } from "../../redux/actions/order";
import Loader from "../Layout/Loader";

const OrderDetails = () => {

    const params = useParams();

    const { order, loading } = useSelector((state) => state.orders);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderDetails(params.id));
    }, [params.id, dispatch]);

    return (
        <section className="orderDetails">
            {loading === false && order !== undefined ? (
                <motion.main initial={{
                    y: "-100vw",
                    opacity: 0,
                }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2 }}>
                    <h1>Order Details</h1>
                    <div>
                        <h1>Shipping</h1>
                        <p>
                            <b>Address</b>
                            {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}
                        </p>
                    </div>

                    <div>
                        <h1>Contact</h1>
                        <p>
                            <b>Name</b>
                            {order.user.name}
                        </p>
                        <p>
                            <b>Mobile no.</b>
                            {order.shippingInfo.phoneNo}
                        </p>
                    </div>

                    <div>
                        <h1>Status</h1>
                        <p>
                            <b>Order status</b>
                            {order.orderStatus}
                        </p>
                        <p>
                            <b>Placed at</b>
                            {order.createdAt.split("T")[0]}
                        </p>
                        <p>
                            <b>Delivered at</b>
                            {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
                        </p>
                    </div>

                    <div>
                        <h1>Payment</h1>
                        <p>
                            <b>Payment method</b>
                            {order.paymentMethod}
                        </p>
                        <p>
                            <b>Payment reference</b>
                            {order.paymentMethod === "Online"
                                ? `#${order.paymentInfo}`
                                : "NA"}
                        </p>
                        <p>
                            <b>Paid at</b>
                            {order.paymentMethod === "Online"
                                ? order.paidAt.split("T")[0]
                                : "NA"}
                        </p>
                    </div>

                    <div>
                        <h1>Amount</h1>
                        <p>
                            <b>Items total</b>
                            ₹{order.itemsPrice}
                        </p>
                        <p>
                            <b>Shipping charges</b>
                            ₹{order.shippingCharges}
                        </p>
                        <p>
                            <b>Tax</b>
                            ₹{order.taxPrice}
                        </p>
                        <p>
                            <b>Total amount</b>
                            ₹{order.totalAmount}
                        </p>
                    </div>

                    <article>
                        <h1>Ordered Items</h1>
                        <div>
                            <h4>Cheese Burger</h4>
                            <div>
                                <span>{order.orderItems.cheeseBurger.quantity}</span> x{" "}
                                <span>{order.orderItems.cheeseBurger.price}</span>
                            </div>
                        </div>

                        <div>
                            <h4>Veg Cheese Burger</h4>
                            <div>
                                <span>{order.orderItems.vegCheeseBurger.quantity}</span> x{" "}
                                <span>{order.orderItems.vegCheeseBurger.price}</span>
                            </div>
                        </div>

                        <div>
                            <h4>Cheese Burger with French Fries</h4>
                            <div>
                                <span>{order.orderItems.burgerWithFries.quantity}</span> x{" "}
                                <span>{order.orderItems.burgerWithFries.price}</span>
                            </div>
                        </div>

                        <div style={{backgroundColor: "rgb(213, 151, 27)"}}>
                            <h4 style={{
                                fontWeight: 500,
                                color: "white",
                            }}>Sub Total</h4>

                            <div style={{
                                fontWeight: 500,
                                color: "white",
                            }}>₹{order.itemsPrice}</div>
                        </div>

                        <div style={{backgroundColor: "rgb(213, 151, 27)"}}>
                            <h4 style={{
                                fontWeight: 500,
                                color: "white",
                            }}>Shipping Charges</h4>

                            <div style={{
                                fontWeight: 500,
                                color: "white",
                            }}>₹{order.shippingCharges}</div>
                        </div>

                        <div style={{backgroundColor: "rgb(213, 151, 27)"}}>
                            <h4 style={{
                                fontWeight: 500,
                                color: "white",
                            }}>Tax</h4>

                            <div style={{
                                fontWeight: 500,
                                color: "white",
                            }}>₹{order.taxPrice}</div>
                        </div>

                        <div>
                            <h4 style={{
                                fontWeight: 800,
                            }}>Total Amount</h4>

                            <div style={{
                                fontWeight: 800,
                            }}>₹{order.totalAmount}</div>
                        </div>

                    </article>
                </motion.main>
            ) : (
                <Loader />
            )}
        </section>
    )
}

export default OrderDetails