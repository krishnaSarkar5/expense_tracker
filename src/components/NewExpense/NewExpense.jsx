import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {


  const saveNewExpenseData=(newExpenseData)=>{
  
    console.log({newExpenseData});
    props.onSaveExpenseList(newExpenseData);
  }


  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={saveNewExpenseData}/>
    </div>
  )
}

export default NewExpense