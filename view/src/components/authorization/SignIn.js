import React, {useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import LoginLabel from "./LoginLabel";
import {Toast} from 'primereact/toast';
import "./login.css"
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {login} from "../../services/UserService";
import Header from "../Header";
import {homepage} from "../../services/host";

export default function SignIn() {
    const toast = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const setError = (element) => {
        document.getElementById(`${element}-error`).textContent = "This field is required"
        document.getElementById(`${element}-label`).style.color = "#f19ea6"
    }

    const showError = (summary, detail) => {
        toast.current.show({severity: "error", summary: summary, detail: detail, life: 3000})
    }

    const unsetError = (element) => {
        document.getElementById(`${element}-error`).textContent = ""
        document.getElementById(`${element}-label`).style.color = "rgba(255, 255, 255, 0.6)"
    }

    const handleUsernameInput = (e) => {
        const username = e.target.value
        setUsername(username)

        if (username !== "") {
            unsetError("username")
        }
    }
    const handlePasswordInput = (e) => {
        const password = e.target.value
        setPassword(password)

        if (password !== "") {
            unsetError("password")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let isRequired = true

        if (username === "") {
            setError("username")
            isRequired = false
        }

        if (password === "") {
            setError("password")
            isRequired = false
        }

        if (isRequired) {
            login(username, password).then(response => {
                console.log(response)
                if (response.ok) {
                    response.text().then(text => {
                            localStorage.setItem("auth", text);
                            localStorage.setItem("username", username);
                            document.location.href = homepage
                        }
                    );
                } else {
                    showError("Something went wrong")
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
                        <InputText id="username" value={username} onChange={handleUsernameInput}/>
                        <label id="username-label" htmlFor="username">Login *</label>
                    </span>
                        <small id="username-error" className="p-invalid"/>
                    </div>

                    <div className="login-element p-col-12 ">
                    <span className="p-float-label">
                        <InputText id="password" type="password" value={password} onChange={handlePasswordInput}/>
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