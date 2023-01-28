import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../redux/actions/other';
import toast from 'react-hot-toast';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const {
        error,
        message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(contactUs(name, email, message));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (stateMessage) {
            toast.success(stateMessage);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, stateMessage]);

    return (
        <section className="contact">
            <motion.form
                onSubmit={submitHandler}
                initial={{
                    x: "-100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                <h2>Contact us</h2>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />

                <textarea
                    placeholder="Message..."
                    cols="30"
                    rows="10"
                    required
                    id="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}>
                </textarea>

                <button type="submit">Send</button>
            </motion.form>

            <motion.div
                className="formBorder"
                initial={{
                    x: "100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    initial={{
                        y: "-100vh",
                        x: "50%",
                        opacity: 0,
                    }}
                    animate={{
                        x: "50%",
                        y: "-50%",
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                    }}
                >
                    <img src={burger} alt="Burger" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;