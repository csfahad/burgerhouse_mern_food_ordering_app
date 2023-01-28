import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { motion } from "framer-motion"
import { getAdminStats } from "../../redux/actions/admin";
import Loader from "../Layout/Loader";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
    <div>
        <h3>
            {title === "Income" && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>
);

const Dashboard = () => {

    const dispatch = useDispatch();
    const { loading, usersCount, ordersCount, totalIncome } = useSelector(
        (state) => state.admin
    );

    useEffect(() => {
        dispatch(getAdminStats());
    }, [dispatch]);

    const data = {
        labels: ["Preparing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of orders",
                data: ordersCount
                    ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
                    : [0, 0, 0],
                backgroundColor: [
                    "rgba(159,63,176,0.1)",
                    "rgba(78,63,176,0.2)",
                    "#6aea254a",
                ],
                borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <section className="dashboard">
            {loading === false ? (
                <motion.main initial={{
                    y: "-100vw",
                    opacity: 0,
                }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2 }}>
                    <article>
                        <Box title="Users" value={usersCount} />
                        <Box title="Orders" value={ordersCount.total}  />
                        <Box title="Income" value={totalIncome} />
                    </article>

                    <section>
                        <div>
                            <Link to="/admin/orders">View Orders</Link>
                            <Link to="/admin/users">View Users</Link>
                        </div>

                        <aside>
                            <Doughnut data={data} />
                        </aside>
                    </section>
                </motion.main>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default Dashboard;