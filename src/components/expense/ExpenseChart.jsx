import React from 'react'
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {

    const dataPoints = [
        {lable:"Jan",value: 0},
        {lable:"Feb",value: 0},
        {lable:"Mar",value: 0},
        {lable:"Apr",value: 0},
        {lable:"May",value: 0},
        {lable:"Jun",value: 0},
        {lable:"Jul",value: 0},
        {lable:"Aug",value: 0},
        {lable:"Sep",value: 0},
        {lable:"Oct",value: 0},
        {lable:"Nov",value: 0},
        {lable:"Dec",value: 0}
    ]

    for(let i=0 ;i < props.items.length ;i++){
       let monthVal =  props.items[i].date.getMonth(); // 0=> January, 11=>December
        dataPoints[monthVal].value +=props.items[i].price;
    }

    // for(let expense in props.items){
    //     console.log(expense);
    //    let monthVal =  expense.date.getMonth(); // 0=> January, 11=>December
    //     dataPoints[monthVal].value +=expense.price;
    // }



  return (
    <div>
        <Chart dataPoints={dataPoints}/>
    </div>
  )
}

export default ExpenseChart