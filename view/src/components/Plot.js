import React from "react";
import {Card} from "primereact/card";
import '../index.css'
import {calculateColor, calculateResult} from "../utils/Point";
import {sendData} from "../services/PointService";
import {getCurrentTime} from "../utils/CurrentTime";

export default function Plot(props) {
    const onClick = (e) => {
        const target = document.getElementById("target-dot")
        const plot = document.getElementById("plot")
        const rect = plot.getBoundingClientRect()
        const centerX = Number(rect.left)
        const centerY = Number(rect.top)
        const clientX = Number(e.clientX)
        const clientY = Number(e.clientY)
        const valueR = document.getElementById("currentR").innerText

        let x, y
        if (window.innerWidth > 1023) {

            x = clientX - centerX
            y = clientY - centerY
        } else {
            let k = 600 / window.innerWidth

            x = (clientX - centerX) * k
            y = (clientY - centerY) * k

        }

        const valueX = ((x - 300.) * valueR / 250.).toFixed(2)
        const valueY = ((-y + 300.) * valueR / 250.).toFixed(2)


        target.setAttribute("cx", String(x))

        target.setAttribute("cy", String(y))
        target.setAttribute('fill', calculateColor(calculateResult(Number(valueX), Number(valueY), Number(valueR))))

        sendData(valueX, valueY, valueR, String(calculateResult(valueX, valueY, valueR)), getCurrentTime(),
            localStorage.getItem("username")).then(props.reloadTable)
    }


    return (
        <Card className="plot-container">
            <svg className="p-card" id="plot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"
                 onClick={e => onClick(e)}>

                <circle cx="300" cy="300" fill="#bb9bd4" r="120"/>
                <polygon className="circle-graph" fill="#2b323c" points="300,300 700,300 100,700 300,500"/>

                <polygon className="rectangle-graph" fill="#bb9bd4" points="300,300 300,540 60,540 60,300"/>

                <polygon className="triangle-graph" fill="#bb9bd4" points="300,300 300,60 60,300"/>

                <line className="axis" stroke="white" x1="0%" x2="100%" y1="50%" y2="50%"/>
                <line className="axis" stroke="white" x1="50%" x2="50%" y1="0" y2="100%"/>

                <line className="arrow" stroke="white" x1="96%" x2="100%" y1="51%" y2="50%"/>
                <line className="arrow" stroke="white" x1="96%" x2="100%" y1="49%" y2="50%"/>

                <line className="arrow" stroke="white" x1="50%" x2="49%" y1="0" y2="4%"/>
                <line className="arrow" stroke="white" x1="50%" x2="51%" y1="0" y2="4%"/>

                <line className="point-line" stroke="white" x1="70%" x2="70%" y1="49%" y2="51%"/>
                <line className="point-line" stroke="white" x1="90%" x2="90%" y1="49%" y2="51%"/>
                <line className="point-line" stroke="white" x1="30%" x2="30%" y1="49%" y2="51%"/>
                <line className="point-line" stroke="white" x1="10%" x2="10%" y1="49%" y2="51%"/>

                <line className="point-line" stroke="white" x1="49%" x2="51%" y1="70%" y2="70%"/>
                <line className="point-line" stroke="white" x1="49%" x2="51%" y1="90%" y2="90%"/>
                <line className="point-line" stroke="white" x1="49%" x2="51%" y1="30%" y2="30%"/>
                <line className="point-line" stroke="white" x1="49%" x2="51%" y1="10%" y2="10%"/>

                <text className="plot-text" x="70%" y="55%">R/2</text>
                <text className="plot-text" x="90%" y="55%">R</text>

                <circle cx="0" cy="0" fill="" id="target-dot" r="0"/>
            </svg>
        </Card>
    )
}



