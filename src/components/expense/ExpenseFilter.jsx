import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onFilterSelected(event.target.value);
      };
    
      return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
              <option value='select year'>select year</option>
              {props.years?.map((year)=>{return<option value={year}>{year}</option> })}
            </select>
          </div>
        </div>
      );
}

export default ExpenseFilter