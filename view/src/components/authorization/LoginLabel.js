import React from 'react';
import "./login.css"
export default function LoginLabel(props) {
    return (
        <div className="login-label">
            <i className="pi pi-lock login-icon"/>
            <h1>{props.label}</h1>
        </div>
    )
}