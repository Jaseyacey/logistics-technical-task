"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import menuData from "@@/app/components/data/menu.json";
import logo from "@@/app/components/assets/logo.png";

const LeftMenu = () => {
  return (
    <nav className="left-menu">
      <NextLink href="/">
        <Image src={logo} alt="logo" width={500} height={500} />
      </NextLink>
      <ul>
        {menuData.data.map((item) => (
          <li key={item.url}>
            <NextLink href={item.url}>{item.title}</NextLink>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .left-menu {
          position: fixed;
          width: 200px;
          height: 100vh;
          background: #ffffff;
          padding: 20px;
          box-shadow: 2px 0 5px #7a6b6b;
        }
        .left-menu ul {
          list-style: none;
        }
        .left-menu li {
          margin-bottom: 10px;
        }
        .left-menu a {
          text-decoration: none;
          color: #333;
        }
      `}</style>
    </nav>
  );
};

export default LeftMenu;