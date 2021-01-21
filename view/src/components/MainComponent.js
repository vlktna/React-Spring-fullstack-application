import React, {useEffect, useState} from "react";
import Plot from "./Plot";
import '../index.css'
import PointForm from "./form/PointForm";
import Table from "./table/Table";
import {getData} from "../services/PointService";
import {Button} from "primereact/button";
import logout from "../services/UserService";

export default function MainComponent() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData().then(response => response.json()).then(userPoints => setData(userPoints))
    }, [])

    const updateData = () => {
        getData().then(response => response.json()).then(userPoints => setData(userPoints))
    }

    return(
        <div>
            <div className="p-card logout">
                <div className="main">
                    <Button onClick={logout} label="logout" />
                </div>
            </div>
            <div className="main">
                <div className="container">
                    <Plot reloadTable={updateData}/>
                    <PointForm reloadTable={updateData}/>
                </div>
                <div className="table-container">
                    <Table data={data}/>
                </div>
            </div>
        </div>
    )
}