import * as React from 'react';
import '../styles/header-styles.css'


const Header = () => {
  const headerItems: { link: string, name: string }[] = [
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contacts" },
    { link: "/writeups", name: "Writeups" },
    { link: "/", name: "Home" },
  ];
  /*
  no clue why this isn't rendering in deployment,
  it works fine in localhost
  const tux = require('../images/tux.png').default;
  */
  return (
    <div>
      <header className="header">
        <h1>UofTLUG <img src="https://cdn.freebiesupply.com/logos/large/2x/linux-tux-1-logo-png-transparent.png" width="30" height="30" alt="Tux" /></h1>
        <ul className="headerMenu">
          {headerItems.map(item => (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Header;
