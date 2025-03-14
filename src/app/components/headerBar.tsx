"use client"
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import logo from '@@/app/components/assets/logo.png';

const HeaderBar = () => {
  return (
    <>
      <div className="headerBar">
        <NextLink href="/">
          <Image src={logo} alt="logo" width={500} height={500} />
        </NextLink>
        <div className="headerBar__nav">
          <NextLink href="/">Home</NextLink>
          <NextLink href="/drivers">Drivers</NextLink>
          <NextLink href="/vehicles">Vehicles</NextLink>
          <NextLink href="/about">About</NextLink>
        </div>
      </div>
      <style jsx>{`
        .headerBar {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: #dfbebe;
        }
        .headerBar__nav {
          display: flex;
          gap: 20px;
          color: #1a1a1a; /* Changed text colour */
        }
      `}</style>
    </>
  );
};

export default HeaderBar;