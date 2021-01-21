import React from 'react';
import {Card} from "primereact/card";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import "./table.css"
import Icon from "./Icon";

export default function Table(props) {
    return (
        <Card className="p-card" id="table">
            <DataTable value={props.data} className="p-datatable-gridlines" scrollable>
                <Column field="valueX" header="X"/>
                <Column field="valueY" header="Y"/>
                <Column field="valueR" header="R"/>
                <Column field="result" header={<Icon type="pi pi-check-circle" title="RESULT"/>}/>
                <Column field="time" header={<Icon type="pi pi-clock" title="TIME"/>}/>
            </DataTable>
        </Card>
    )
}


