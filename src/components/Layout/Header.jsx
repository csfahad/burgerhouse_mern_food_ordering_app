import React from 'react'
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import {AiOutlineLogin} from "react-icons/ai"
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion";

const Header = ({isAuthenticated = false}) => {
    return (
        <nav>
            <motion.div initial={{x:"-100%"}} whileInView={{x:0}}>
                <IoFastFoodOutline/>
            </motion.div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/cart"><FiShoppingCart /></Link>

                <Link to={isAuthenticated ? "/me" : "/login"}>
                    {isAuthenticated ? <FaUser /> : <AiOutlineLogin />}
                </Link>
            </div>
        </nav>
    )
}

export default Header