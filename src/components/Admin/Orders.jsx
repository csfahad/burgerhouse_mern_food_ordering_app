import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa"
import { getAdminOrders, processOrder } from "../../redux/actions/admin";
import Loader from "../Layout/Loader";

const Orders = () => {
    const dispatch = useDispatch();
    const { loading, orders, message, error } = useSelector(
        (state) => state.admin
    );

    const processOrderHandler = (id) => {
        dispatch(processOrder(id));
    };

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }

        dispatch(getAdminOrders());
    }, [dispatch, error, message]);

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
                                <th>User</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders &&
                                orders.map((i) => (
                                    <tr key={i}>
                                        <td>#{i._id}</td>
                                        <td>{i.orderStatus}</td>
                                        <td>
                                            {i.orderItems.cheeseBurger.quantity +
                                                i.orderItems.vegCheeseBurger.quantity +
                                                i.orderItems.burgerWithFries.quantity}
                                        </td>
                                        <td>₹{i.totalAmount}</td>
                                        <td>{i.paymentMethod}</td>
                                        <td>{i.user.name}</td>
                                        <td>
                                            <Link to={`/order/${i._id}`}>
                                                <AiOutlineEye />
                                            </Link>

                                            <button onClick={() => processOrderHandler(i._id)}>
                                                < FaLocationArrow />
                                            </button>
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
    );
};

export default Orders;