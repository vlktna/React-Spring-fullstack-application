import React, {useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import LoginLabel from "./LoginLabel";
import "./login.css"
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {createNewUser} from "../../services/UserService";
import Header from "../Header";
import {Toast} from "primereact/toast";
import {setError, showMessage, unsetError} from "./error";

export default function SignUp() {
    const toast = useRef(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const isRequired = () => {
        let isRequired = true

        if (firstName === "") {
            setError("firstName")
            isRequired = false
        }

        if (lastName === "") {
            setError("lastName")
            isRequired = false
        }

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

    const handleRegSubmit = (e) => {
        e.preventDefault()

        if (isRequired()) {
            createNewUser({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password
            }).then(res => {
                if (res.ok) {
                    showMessage(toast, "success", "Success", "Now you can sign in")
                } else {
                    showMessage(toast, "error", "Error", "This login is already taken")
                }
            })
        }
    }

    const handleInput = (e) => {
        const targetName = e.target.id
        const value = e.target.value.trim()

        switch (targetName) {
            case "firstName":
                setFirstName(value)
                break
            case "lastName":
                setLastName(value)
                break
            case "username":
                setUsername(value)
                break
            case "password":
                setPassword(value)
                break
        }
        unsetError(targetName)
    }

    return (
        <div>
            <Toast ref={toast}/>
            <Header leftElem="Волокитина Вероника P3230" rightElem="Вариант 2651"/>
            <form onSubmit={handleRegSubmit} className="p-card login-container">
                <LoginLabel label="Sign up"/>

                <div className="p-fluid p-formgrid p-grid">

                    <div className="login-element p-col-12 p-md-6">
                    <span className="p-float-label">
                        <InputText id="firstName" value={firstName} onChange={handleInput}/>
                        <label id="firstName-label" htmlFor="firstName">First Name *</label>
                    </span>
                        <small id="firstName-error" className="p-invalid"/>
                    </div>

                    <div className="login-element p-col-12 p-md-6">
                    <span className="p-float-label">
                        <InputText id="lastName" value={lastName} onChange={handleInput}/>
                        <label id="lastName-label" htmlFor="lastName">Last Name *</label>
                    </span>
                        <small id="lastName-error" className="p-invalid"/>
                    </div>

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
                        <Button id="sign-in-button" type="submit" label="SIGN UP"/>
                    </div>
                    <div>
                        <Link className='SectionNavigation-Item Section' to="/login/sign-in">
                        <span className='Section-Title'>Already have an account? <span
                            className="purple-text">Sign in</span></span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}


