import React from "react";
import Header from "../components/header";
import '../styles/contact-styles.css'


const Contacts = () => {
  return (
    <main>
      <Header />
      <div className='container'>
        <h1>Contact</h1>
        <p>We have a  <a href="https://discord.gg/q74pPpJ5ch" target="_blank">Discord server</a> where you can meet others!</p>
        <p>We also have a <a href="https://github.com/UofTLUG" target="_blank">Github organization</a> page if you want to check out our projects</p>
      </div>
    </main>
  );
};

export default Contacts;
