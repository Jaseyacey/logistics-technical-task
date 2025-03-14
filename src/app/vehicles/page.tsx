"use client"
import React from "react";
import LeftMenu from "../components/LeftMenu";

export default function Drivers() {
    return (
        <>
        <LeftMenu />
        <div className="vehicleHeader">
            <h1 className="vehicle-header">Vehicles</h1>
        </div>
        <style jsx>{`
            .vehicleHeader {
                align-items: center;
                justify-content: center;
                display: flex;
                padding: 20px;
            }
            .vehicle-header {
                font-size: 50px;
                color: #1a1a1a;
            }
        `}</style>
        </>
    );
};;