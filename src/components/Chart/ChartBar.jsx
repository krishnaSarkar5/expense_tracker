import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {

    let fillBarHeight = '0%';

    if(props.value>0){
        fillBarHeight = Math.round( (props.value / props.maxValue) * 100) + "%";
    }


    console.log(props.value)


  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:fillBarHeight}}></div>
        </div>
        <div className='chart-bar__label'>{props.lable}</div>
    </div>
  )
}

export default ChartBar