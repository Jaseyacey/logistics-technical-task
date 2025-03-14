"use client";
import LeftMenu from "./components/LeftMenu";

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
