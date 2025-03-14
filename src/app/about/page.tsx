"use client"
import React from "react";
import LeftMenu from "../components/LeftMenu";

export default function Drivers() {
    return (
        <>
        <LeftMenu />
        <div className="aboutHeader">
            <h1 className="about-header">About</h1>
        </div>
        <style jsx>{`
            .aboutHeader {
                align-items: center;
                justify-content: center;
                display: flex;
                padding: 20px;
            }
            .about-header {
                font-size: 50px;
                color: #1a1a1a;
            }
        `}</style>
        </>
    );
};;