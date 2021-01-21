import React, {useEffect, useState} from 'react';
import {Dropdown} from "primereact/dropdown";
import {Slider} from "primereact/slider";
import {Button} from "primereact/button";
import "../../index.css";
import "./pointForm.css";
import {deleteData, sendData} from "../../services/PointService";
import {calculateResult, createTargetDot} from "../../utils/Point";
import {getCurrentTime} from "../../utils/CurrentTime";

export default function PointForm(props) {
    const [valueX, setValueX] = useState(0.);
    const [valueY, setValueY] = useState(0.);
    const [valueR, setValueR] = useState(1.);

    useEffect(() => {
        localStorage.setItem("valueR", "1")
        createTargetDot(0, 0, 1)
    }, [])

    const valueXSelectItems = [
        {label: '-3', value: -3.},
        {label: '-2', value: -2.},
        {label: '-1', value: -1.},
        {label: '0', value: 0},
        {label: '1', value: 1.},
        {label: '2', value: 2.},
        {label: '3', value: 3.},
        {label: '4', value: 4.},
        {label: '5', value: 5.}
    ];

    const valueRSelectItems = [
        {label: '1', value: 1.},
        {label: '2', value: 2.},
        {label: '3', value: 3.},
        {label: '4', value: 4.},
        {label: '5', value: 5.}
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        sendData(valueX, valueY, valueR, String(calculateResult(valueX, valueY, valueR)), getCurrentTime(),
            localStorage.getItem("username")).then(props.reloadTable)

        createTargetDot(Number(valueX), Number(valueY), Number(valueR))
    }

    const handleValueXInput = (e) => {
        setValueX(e.target.value)
    }

    const handleValueYInput = (e) => {
        setValueY(e.value)
    }

    const handleValueRInput = (e) => {
        setValueR(e.target.value)
    }

    const handleDelete = () => {
        deleteData().then(
            props.reloadTable
        )
    }

    return (
        <form onSubmit={handleSubmit} className="p-card form-container">
            <div className="p-fluid">

                <div className="p-field element">
                    <div className="p-field p-text-bold">
                        <span>X = {valueX}</span>
                    </div>
                    <label htmlFor="valueX" className="label">X in (-3, 5)</label>
                    <Dropdown onChange={handleValueXInput} id="valueX" value={valueX}
                              options={valueXSelectItems} placeholder="Select X"/>
                </div>

                <div className="p-field element">
                    <div className="p-field p-text-bold">
                        <span>Y = {valueY}</span>
                    </div>
                    <label htmlFor="valueY" className="label">Y in (-3, 5)</label>
                    <Slider onChange={handleValueYInput} id="valueY" value={valueY}
                            min={-3} max={5} step={1}/>
                </div>

                <div className="p-field element">
                    <div className="p-field p-text-bold">
                        <span>R = </span>
                        <span id="currentR">{valueR}</span>
                    </div>
                    <label htmlFor="valueR" className="label">R in (-3, 5)</label>
                    <Dropdown onChange={handleValueRInput} id="valueR" value={valueR}
                              options={valueRSelectItems} placeholder="Select R"/>
                </div>

                <div className="button-block">
                    <Button type="submit" style={{marginRight: "1rem"}} label="Check"
                            icon="pi pi-check" className="button"/>
                    <Button onClick={handleDelete} type="button" label="Clear table" icon="pi pi-trash"
                            className="p-button-secondary button"/>
                </div>
            </div>
        </form>
    )
}