"use client";
import DriverWireframe from "@@/app/components/driverWireframe";
import LeftMenu from "./components/LeftMenu";

export default function Home() {
  return (
    <div className="mainPage">
      <div className="leftMenuContainer">
        <LeftMenu />
      </div>
      <div className="driverWireframeContainer">
        <DriverWireframe />
      </div>
      <style jsx>{`
        .mainPage {
          display: flex;
          flex-direction: row;
          height: 100vh; /* optional: full viewport height */
        }

        .leftMenuContainer {
          /* Fixed or minimum width for the menu */
          width: 220px;
          background-color: #f8f8f8; /* example color */
          flex-shrink: 0; /* prevents the menu from shrinking */
        }

        .driverWireframeContainer {
          /* Takes remaining space */
          flex: 1;
          overflow: auto; /* scroll if content is large */
          padding: 20px;  /* spacing around content */
        }
      `}</style>
    </div>
  );
}