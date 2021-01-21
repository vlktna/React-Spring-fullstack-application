import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";

class PublicRoute extends Component {
    render() {
        const { component: Component, ...props} = this.props;

        return (
            <Route
                {...props}
                render = {props => (
                    localStorage.getItem("auth") === null ?
                        <Redirect to = "/login/sign-in" /> :
                        <Component {...props} />
                )}
            />

        )
    }
}

export default PublicRoute;