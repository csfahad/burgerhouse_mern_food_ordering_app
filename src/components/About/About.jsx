import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpeg";
import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="about">
            <main >
                <motion.div initial={{
                    x: "-100vw",
                    opacity: 0,
                }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2 }}>
                    <h2>Burgerhouse</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Cs Fahad (Founder)</h3>
                        </div>

                        <p> Hey visitors, here you can find the perfect buger variety for you. Explore the various type of food and burgers. So what are you waiting for? Go and grab for you one. Yeah hurry pls..😊 </p>

                        <p>
                            Click below to see the menu
                        </p>

                        <Link to="/">
                            <RiFindReplaceLine />
                        </Link>
                    </article>
                </motion.div>
            </main>
        </section>
    );
};

export default About;