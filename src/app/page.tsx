"use client";
import LeftMenu from "./components/LeftMenu";
import Image from "next/image";
import logo from "@@/app/components/assets/logo.png";

export default function Home() {
  return (
    <>
      <LeftMenu />
      <style jsx>{`
        .headerBar {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: #dfbebe;
        }
        
      `}</style>
    </>
  );
}
