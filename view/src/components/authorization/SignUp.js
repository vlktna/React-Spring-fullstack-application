import React, {useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import LoginLabel from "./LoginLabel";
import "./login.css"
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {createNewUser} from "../../services/UserService";
import Header from "../Header";
import {Toast} from "primereact/toast";

export default function SignUp() {
    const toast = useRef(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const setError = (element) => {
        document.getElementById(`${element}-error`).textContent = "This field is required"
        document.getElementById(`${element}-label`).style.color = "#f19ea6"
    }

    const unsetError = (element) => {
        document.getElementById(`${element}-error`).textContent = ""
        document.getElementById(`${element}-label`).style.color = "rgba(255, 255, 255, 0.6)"
    }

    const showMessage = (severity, summary, detail) => {
        toast.current.show({severity: severity, summary: summary, detail: detail, life: 3000})
    }


    const handleRegSubmit = (e) => {
        e.preventDefault()
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

        if (isRequired) {
            createNewUser({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password
            }).then(res => {
                if (res.ok) {
                    showMessage("success", "Success", "Now you can sign in")

                } else {
                    showMessage("error", "Error", "This login is already taken")
                }
            })
        }
    }

    const handleFirstNameInput = (e) => {
        const firstName = e.target.value
        setFirstName(firstName)

        if (firstName !== "") {
            unsetError("firstName")
        }
    }
    const handleLastNameInput = (e) => {
        const lastName = e.target.value
        setLastName(lastName)

        if (lastName !== "") {
            unsetError("lastName")
        }
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

    return (
        <div>
            <Toast ref={toast}/>
            <Header leftElem="Волокитина Вероника P3230" rightElem="Вариант 2651"/>
            <form onSubmit={handleRegSubmit} className="p-card login-container">
                <LoginLabel label="Sign up"/>

                <div className="p-fluid p-formgrid p-grid">

                    <div className="login-element p-col-12 p-md-6">
                    <span className="p-float-label">
                        <InputText id="firstName" value={firstName} onChange={handleFirstNameInput}/>
                        <label id="firstName-label" htmlFor="firstName">First Name *</label>
                    </span>
                        <small id="firstName-error" className="p-invalid"/>
                    </div>

                    <div className="login-element p-col-12 p-md-6">
                    <span className="p-float-label">
                        <InputText id="lastName" value={lastName} onChange={handleLastNameInput}/>
                        <label id="lastName-label" htmlFor="lastName">Last Name *</label>
                    </span>
                        <small id="lastName-error" className="p-invalid"/>
                    </div>

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


