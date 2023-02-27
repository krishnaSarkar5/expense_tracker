import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expences.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'

const Expenses = (props) => {

  const [filterSelected,setFilterSelected] = useState('select year');

 let uniqueYears =  [...new Set(props.expenses?.map((expense)=>{return expense.date.getFullYear()}))];

 let filteredExpenses = props.expenses?.filter(expense=>{return filterSelected=="select year"?true:expense.date.getFullYear()==filterSelected});

  const handleFilter = (selectedYear)=>{
    setFilterSelected(selectedYear)
  }

  return (
    <>
    <Card className='expenses'>

      <ExpenseFilter onFilterSelected={handleFilter} selected={filterSelected} years={uniqueYears}/>

      <ExpenseList items ={filteredExpenses}/>

    </Card>
    </>
  )
}

export default Expenses