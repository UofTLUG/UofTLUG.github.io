import * as React from "react"
import Header from "../components/header"
import '../styles/home-styles.css'


// markup
const IndexPage = () => {

  const tux = require('../images/tux.png').default;
  const uoft = require('../images/uoft.png').default;
  return (
    <main>
      <Header />
      <div className="container">
        <div id="main">
          <img src={uoft} height="120" width="120" alt="UofTLogo" />
          <img src={tux} height="120" width="120" alt="Tux" />
        </div>
        <h2>Welcome to the University of Toronto Linux User Group!</h2>
        <p>GNU/Linux is a free and open source operating system that comes in many different distributions/flavours.
        </p>
        <p><a href="https://ubuntu.com/" target="_blank">Ubuntu</a> and <a href="https://linuxmint.com/" target="_blank">Linux Mint</a> are very good distributions for anyone looking to start using Linux.</p>
      </div>
    </main>
  )
}

export default IndexPage
