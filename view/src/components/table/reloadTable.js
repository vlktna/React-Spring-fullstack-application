import React, {useEffect, useState} from 'react';
import {getData} from "../../services/PointService";

export default function ReloadTable(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        getData().then(response => response.json()).then(userPoints => setData(userPoints))
    })

    return

}