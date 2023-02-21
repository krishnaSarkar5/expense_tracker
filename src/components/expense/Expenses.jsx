import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
  return (
    <div>
         <ExpenseItem 
              title={props.expenses[0].title} 
              description={props.expenses[0].description} 
              price={props.expenses[0].price} 
              date={props.expenses[0].date}/>
         <ExpenseItem 
                title={props.expenses[1].title} 
                description={props.expenses[1].description} 
                price={props.expenses[1].price} 
                date={props.expenses[1].date}/>
         <ExpenseItem 
                title={props.expenses[2].title} 
                description={props.expenses[2].description} 
                price={props.expenses[2].price} 
                date={props.expenses[2].date}/>
    </div>
  )
}

export default Expenses