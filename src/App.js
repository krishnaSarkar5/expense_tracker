
import { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const [expenseList,serExpenseList] = useState([
    { 
      id:"e1",
      title:"Fruits",
      description:"Healthy foods",
      price:"10",
      date: new Date("2022-03-25")
    },
    {
      id:"e2",
      title:"Tour",
      description:"Bali",
      price:"100",
      date: new Date("2022-10-20")
    },
    {
      id:"e3",
      title:"Mobile Recharge",
      description:"Re-establish connection",
      price:"15",
      date: new Date("2022-03-27")
    }
  ])

  const addExpenseListHandler = (newExpense)=>{
      serExpenseList((previousState)=>{
        return [...previousState,newExpense]
      })
      console.log({expenseList});
  }




  return (
    <div>
      <NewExpense onSaveExpenseList={addExpenseListHandler}/>
      <Expenses expenses={expenseList}/>

    </div>

  );
}

export default App;
