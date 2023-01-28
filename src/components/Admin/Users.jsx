import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../redux/actions/admin";
import { motion } from "framer-motion"
import Loader from "../Layout/Loader";

const Users = () => {
    const dispatch = useDispatch();

    const { loading, users } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getAdminUsers());
    }, [dispatch]);

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
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Avatar</th>
                                <th>Role</th>
                                <th>Since</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users &&
                                users.map((i) => (
                                    <tr key={i._id}>
                                        <td>#{i._id}</td>
                                        <td>{i.name}</td>
                                        <td>
                                            <img src={i.photo} alt="User" />
                                        </td>
                                        <td>{i.role}</td>
                                        <td>{i.createdAt.split("T")[0]}</td>
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

export default Users;