import React, { useState } from 'react'
import './ExpenseForm.css'
import {expenseFormValidate} from '../../utils/ValidateUtil'
import { randomString } from '../../utils/RandomStringGenerator'

const ExpenseForm = (props) => {
        
        // const [newExpenseFormInput,setNewExpenseFormInput] = useState({title:"",amount:"",date:""});

        const [titleInput,setTitleInput] = useState("");
        const [amountInput,setAmountInput] = useState("");
        const [dateInput,setDateInput] = useState("");
        const [error,setError]=useState({})

        const titleChangeHandle = (e)=>{

            setTitleInput(e.target.value);

            // setNewExpenseFormInput((previousState)=>{
            //     return {...previousState,title: e.target.value}
            //     }   
            // )
        }

        const amountChangeHandle = (e)=>{
            setAmountInput(e.target.value);
            // setNewExpenseFormInput((previousState)=>{
            //     return {...previousState,amount: e.target.value}
            //     }   
            // )
        }

        const dateChangeHandle = (e)=>{
            setDateInput(e.target.value);
            // setNewExpenseFormInput((previousState)=>{
            //     return {...previousState,date: new Date(e.target.value)}
            //     }   
            // )   
        }

        const handleSubmit = (e)=>{
            e.preventDefault();

            let errorObject =  expenseFormValidate({
                title: titleInput,
                amount: amountInput,
                date: dateInput
            });

            const newExpense={
                title: titleInput,
                price: amountInput,
                date: new Date(dateInput),
                id: randomString()
            }

        

            if(Object.keys(errorObject).length !== 0){

                console.log({errorObject})
                setError(errorObject)
                return
            }

            setError({})
            console.log({newExpense});
            
            props.onSaveExpenseDate(newExpense); 

            setTitleInput("");
            setAmountInput("");
            setDateInput("");
        }
    
  return (
    <form>
        <div className='new-expense__controls'>

            {/* inputs  */}
            <div className='new-expense__control'>
                <label >title</label>
                <input type='text' value={titleInput} onChange={titleChangeHandle}/>
                <p style={{color:"red",fontSize:"15px"}}>{error?.title && error?.title}</p>
            </div>
          
            <div className='new-expense__control'>
                <label >Amount</label>
                <input type='number' min='0.01' step='0.01' value={amountInput} onChange={amountChangeHandle}/>
                <p style={{color:"red",fontSize:"15px"}}>{error?.amount && error?.amount}</p>
            </div>

            <div className='new-expense__control'>
                <label >Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' value={dateInput} onChange={dateChangeHandle}/>
                <p style={{color:"red",fontSize:"15px"}}>{error?.date && error?.date}</p>
            </div>

        </div>

        {/* submit button  */}
        <div className='new-expense__actions'>
            <button type='submit' onClick={handleSubmit}>Add Expense</button>
        </div>
    </form>
    
  )
}

export default ExpenseForm