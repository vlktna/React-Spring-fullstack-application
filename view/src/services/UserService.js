import {homepage, hostURL} from "./host";

export function createNewUser(data) {
    return fetch(`${hostURL}/registration`,
        {
            method: "POST",
            origin: homepage,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "firstName": data.firstName, "lastName": data.lastName,
                "username": data.username, "password": data.password
            })
        }
    )
}

export function login(username, password) {
    return fetch(`${hostURL}/authentication`,
        {
            method: 'POST',
            origin: homepage,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"username": username, "password": password})
        })
}

export default function logout() {
    localStorage.clear()
    document.location.href = homepage
}