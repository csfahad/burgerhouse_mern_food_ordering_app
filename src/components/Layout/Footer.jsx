import React from 'react'
import {ImTwitter} from "react-icons/im"
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Burgerhouse</h2>
            <strong>© 2023 All rights reserved</strong>
        </div>
        <aside>
            <h4>Follow us on</h4>
            <a href="https://linkedin.com/in/csfahad" target="blank"><BsLinkedin /></a>
            <a href="https://twitter.com/fahad_cs" target="blank"><ImTwitter /></a>
            <a href="https://github.com/csfahad" target="blank"><BsGithub /></a>
        </aside>
    </footer>
  )
}

export default Footer