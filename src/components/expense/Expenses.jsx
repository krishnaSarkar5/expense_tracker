import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expences.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {

  const [filterSelected,setFilterSelected] = useState('select year');

  const handleFilter = (selectedYear)=>{
    setFilterSelected(selectedYear)
  }

  return (
    <>
    <Card className='expenses'>
    <ExpenseFilter onFilterSelected={handleFilter} selected={filterSelected} years={[...new Set(props.expenses?.map((expense)=>{return expense.date.getFullYear()}))]}/>
      { props.expenses?.filter(expense=>{return filterSelected=="select year"?true:expense.date.getFullYear()==filterSelected}).map((expense)=>{
       return(  
       <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                price={expense.price} 
                date={expense.date}/>
          )
      })}
      </Card>
    </>
  )
}

export default Expenses