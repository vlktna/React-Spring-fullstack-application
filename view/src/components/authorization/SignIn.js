import React, {useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import LoginLabel from "./LoginLabel";
import {Toast} from 'primereact/toast';
import "./login.css"
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {login} from "../../services/UserService";
import Header from "../Header";
import {homepage} from "../../utils/host";
import {setError, showMessage, unsetError} from "./error";

export default function SignIn() {
    const toast = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e) => {
        const targetName = e.target.id
        const value = e.target.value.trim()

        switch (targetName) {
            case "username":
                setUsername(value)
                break
            case "password":
                setPassword(value)
                break
        }
        unsetError(targetName)
    }

    const isRequired = () => {
        let isRequired = true

        if (username === "") {
            setError("username")
            isRequired = false
        }

        if (password === "") {
            setError("password")
            isRequired = false
        }
        return isRequired
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isRequired()) {
            login(username, password).then(response => {
                if (response.ok) {
                    response.text().then(text => {
                            localStorage.setItem("auth", text);
                            localStorage.setItem("username", username);
                            document.location.href = homepage
                        }
                    );
                } else {
                    showMessage(toast, "error", "Error", "This user doesn't seem to exist")
                    localStorage.clear();
                }
            })
        }
    }

    return (
        <div>
            <Toast ref={toast}/>
            <Header leftElem="Волокитина Вероника P3230" rightElem="Вариант 2651"/>
            <form onSubmit={handleSubmit} className="p-card login-container">
                <LoginLabel label="Sign in"/>

                <div className="p-fluid p-formgrid p-grid">

                    <div className="login-element p-col-12">
                    <span className="p-float-label">
                        <InputText id="username" value={username} onChange={handleInput}/>
                        <label id="username-label" htmlFor="username">Login *</label>
                    </span>
                        <small id="username-error" className="p-invalid"/>
                    </div>

                    <div className="login-element p-col-12 ">
                    <span className="p-float-label">
                        <InputText id="password" type="password" value={password} onChange={handleInput}/>
                        <label id="password-label" htmlFor="password">Password *</label>
                    </span>
                        <small id="password-error" className="p-invalid"/>
                    </div>

                    <div className="login-element p-col-12">
                        <Button id="sign-in-button" type="submit" label="SIGN IN"/>
                    </div>
                    <div>
                        <Link className='SectionNavigation-Item Section' to="/login/sign-up">
                            <span className='Section-Title'>Don't have an account? <span
                                className="purple-text">Sign Up</span></span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>

    )
}