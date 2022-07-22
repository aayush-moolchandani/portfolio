import React, { useState } from "react";
import { AiOutlineHome, AiOutlineContacts, AiOutlineProject } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";

export default function Nav() {
  const [active, setActive] = useState(0);
  return (
    <nav>
      <a href='#' className={active === 0 ? "active" : null} onClick={() => setActive(0)}>
        <AiOutlineHome />
      </a>
      <a href='#about' className={active === 1 ? "active" : null} onClick={() => setActive(1)}>
        <SiAboutdotme />
      </a>
      <a href='#experince' className={active === 2 ? "active" : null} onClick={() => setActive(2)}>
        <BsBook />
      </a>
      <a href='#service' className={active === 3 ? "active" : null} onClick={() => setActive(3)}>
        <RiServiceLine />
      </a>
      <a href='#project' className={active === 4 ? "active" : null} onClick={() => setActive(4)}>
        <AiOutlineProject />
      </a>
      <a href='#contact' className={active === 5 ? "active" : null} onClick={() => setActive(5)}>
        <AiOutlineContacts />
      </a>
    </nav>
  );
}
