"use client"
import React from "react";
import LeftMenu from "../components/LeftMenu";

export default function Drivers() {
    return (
        <>
        <LeftMenu />
        <div className="driverHeader">
            <h1 className="driver-header">Drivers</h1>
        </div>
        <style jsx>{`
            .driverHeader {
                align-items: center;
                justify-content: center;
                display: flex;
                padding: 20px;
            }
            .driver-header {
                font-size: 50px;
                color: #1a1a1a;
            }
        `}</style>
        </>
    );
};;