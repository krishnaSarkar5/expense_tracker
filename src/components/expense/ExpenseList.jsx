import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

  if(props.items.length===0){
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }
  
  return (
    <ul>
        { props.items?.map((expense)=>  
       <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                price={expense.price} 
                date={expense.date}/>
          )
        }
    </ul>
  )
}

export default ExpenseList