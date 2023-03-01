import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'


const Chart = (props) => {

   let valueArray = props.dataPoints.map( expense=>expense.value )

    let maximumValue = Math.max(...valueArray)  // max method takes input like Math.max(1,3,2)    o/p = 3

  return (
    <div className='chart'>
        {props.dataPoints.map( datapoint=> 
        <ChartBar 
            key={datapoint.lable}
            value={datapoint.value}
            maxValue={maximumValue}
            lable={datapoint.lable}
        />)}
    </div>
  )
}

export default Chart