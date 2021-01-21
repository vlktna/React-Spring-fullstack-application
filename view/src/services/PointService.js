import {hostURL} from "./host";

export function getData() {
    return fetch(`${hostURL}/points`,
        {
            method: "GET",
            headers: {
                Authorization: "Basic " + localStorage.getItem("auth")
            }
        }
    )
}

export function sendData(x, y, r, result, time, owner) {
    console.log("sending...")
    return fetch(`${hostURL}/save`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + localStorage.getItem("auth")
            },
            body: JSON.stringify({"valueX": x, "valueY": y, "valueR": r,
                "result": result, "time": time, "owner": owner})
        }
    );
}

export function deleteData() {
    return fetch(`${hostURL}/delete`,
        {
            method: "DELETE",
            headers: {
                Authorization: "Basic " + localStorage.getItem("auth")
            }
        }
    );
}

