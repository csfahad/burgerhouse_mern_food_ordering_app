import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/founder.jpeg"

const Founder = () => {

    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        }
    }

  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Cs Fahad</h3>
            <p>Hey visitors, Cs Fahad here, Founder of Burgerhouse, here you can find the perfect buger variety for you. So what are you waiting for? Go and grab for you one. Yeah hurry pls..😊</p>
        </motion.div>
    </section>
  )
}

export default Founder