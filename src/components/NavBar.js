import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
     {links.map((link, index) => (
        // Using the map function to create an <a> tag for each link
        // The 'href' attribute will be '#home', '#about', or '#contact' based on the link
        // The 'key' prop will be a unique value based on the index of the array
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
