import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date = {props.date}/>
      <h2>{props.title}</h2>
      <div className='expense-item__description'>{props.description}</div>
      <div className='expense-item__price'>${props.price}</div>
    </div>
  )
}

export default ExpenseItem