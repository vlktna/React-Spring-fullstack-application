import React from 'react';
import "./table.css";
export default function Icon(props) {
    return (
        <span>
            <i className={props.type}/>
            <label className="tableHeader"> {props.title}</label>
        </span>
    )
}

