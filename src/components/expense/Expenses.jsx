import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expences.css'
import Card from '../UI/Card'

const Expenses = (props) => {
  return (
    <>
      {props.expenses?.map((expense)=>{
       return( <Card className='expenses'> 
       <ExpenseItem 
                title={expense.title} 
              description={expense.description} 
              price={expense.price} 
              date={expense.date}/>
          </Card>)
      })}
    </>

    // <Card className='expenses'>
    //      <ExpenseItem 
    //           title={props.expenses[0].title} 
    //           description={props.expenses[0].description} 
    //           price={props.expenses[0].price} 
    //           date={props.expenses[0].date}/>
    //      <ExpenseItem 
    //             title={props.expenses[1].title} 
    //             description={props.expenses[1].description} 
    //             price={props.expenses[1].price} 
    //             date={props.expenses[1].date}/>
    //      <ExpenseItem 
    //             title={props.expenses[2].title} 
    //             description={props.expenses[2].description} 
    //             price={props.expenses[2].price} 
    //             date={props.expenses[2].date}/>
    // </Card>
  )
}

export default Expenses