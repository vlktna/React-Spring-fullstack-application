// import {hostURL} from "./host";

import {hostURL} from "../utils/host";

export function getData() {
    return fetch(`${hostURL}/points`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + localStorage.getItem("auth")
            },
            body: JSON.stringify(localStorage.getItem("username"))
        }
    )
}

export function sendData(x, y, r, result, time, owner) {
    return fetch(`${hostURL}/save`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + localStorage.getItem("auth")
            },
            body: JSON.stringify({
                "valueX": x, "valueY": y, "valueR": r,
                "result": result, "time": time, "owner": owner
            })
        }
    );
}

export function deleteData() {
    return fetch(`${hostURL}/delete`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + localStorage.getItem("auth")
            },
            body: JSON.stringify(localStorage.getItem("username"))
        }
    );
}

