import React from 'react';
import Header from '../components/header';
import '../styles/about-styles.css';

const About = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <div>
          <h2>About Us</h2>
          <p>We are a club at the University of Toronto that aims to provide a space for people to discuss and learn about GNU/Linux
            as well as Free and Open Source Software (FOSS).
          </p>
        </div>
        <div>
          <h2>FAQ</h2>
          <ul>

            <li>How can I get started with Linux?</li>
            <p>The best way to learn Linux is really to just start using it! If you're on Windows, you can use WSL, virtualization (VirtualBox, VMWare etc.),
              or just take your computer and just install Linux normally
            </p>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
