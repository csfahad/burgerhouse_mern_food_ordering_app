import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { getMyOrders } from "../../redux/actions/order";
import Loader from "../Layout/Loader";

const MyOrders = () => {

    const dispatch = useDispatch();

    const { orders, loading, error } = useSelector((state) => state.orders);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }

        dispatch(getMyOrders());
    }, [dispatch, error]);

    return (
        <section className="tableClass">
            {loading === false ? (
                <motion.main initial={{
                    x: "-100vw",
                    opacity: 0,
                }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2 }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Status</th>
                                <th>Item Qty.</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders &&
                                orders.map((i) => (
                                    <tr key={i._id}>
                                        <td>#{i._id}</td>
                                        <td>{i.orderStatus}</td>
                                        <td>
                                            {i.orderItems.cheeseBurger.quantity +
                                                i.orderItems.vegCheeseBurger.quantity +
                                                i.orderItems.burgerWithFries.quantity}
                                        </td>
                                        <td>₹{i.totalAmount}</td>
                                        <td>{i.paymentMethod}</td>
                                        <td>
                                            <Link to={`/order/${i._id}`}>
                                                <AiOutlineEye />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </motion.main>
            ) : (
                <Loader />
            )}
        </section>
    )
}

export default MyOrders