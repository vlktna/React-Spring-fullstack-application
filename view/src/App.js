import './index.css'
import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {Component} from "react";
import SignUp from "./components/authorization/SignUp";
import MainComponent from "./components/MainComponent";
import SignIn from "./components/authorization/SignIn";
import PrivateRoute from "./security/PrivateRoute";
import PublicRoute from "./security/PublicRoute";

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={'/~s284754'}>
                <Switch>
                    <PublicRoute exact path="/" component={MainComponent}/>
                    <PrivateRoute path="/login/sign-in" component={SignIn}/>
                    <PrivateRoute path="/login/sign-up" component={SignUp}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;