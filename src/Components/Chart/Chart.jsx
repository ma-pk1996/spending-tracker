import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className="chart">
            {props.datapoints?.map((datapoints) => (
                <ChartBar 
                    key={datapoints.id}
                    value={datapoints.value}
                    maxValue={totalMaximum}
                    label={datapoints.label}
                />
            ))}
        </div>
    )
}

export default Chart;





