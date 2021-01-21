import React from "react";
import '../index.css'

export default function Header(props) {
    return (
        <header className="p-card">
            <div className="content">
                <span className="header-left">
                    {props.leftElem}
                </span>
                <span className="header-right">
                    {props.rightElem}
                </span>
            </div>
        </header>
    )
}