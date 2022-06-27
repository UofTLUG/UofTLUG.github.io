import * as React from 'react';
import '../styles/header-styles.css'

const Header = () => {
  const headerItems: { link: string, name: string }[] = [
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contacts" },
    { link: "/writeups", name: "Writeups" },
    { link: "/", name: "Home" },
  ];
  return (
    <div>
      <header className="header">
        <h1>UofTLUG <img src={"../img/tux.png"} width="30" height="30" alt="Tux" /></h1>
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
