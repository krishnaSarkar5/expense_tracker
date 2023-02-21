
import Expenses from "./components/expense/Expenses";

function App() {

  const expenses = [
    {
      title:"Fruits",
      description:"Healthy foods",
      price:"10",
      date: new Date("2022-03-25")
    },
    {
      title:"Tour",
      description:"Bali",
      price:"100",
      date: new Date("2022-10-20")
    },
    {
      title:"Mobile Recharge",
      description:"Re-establish connection",
      price:"15",
      date: new Date("2022-03-27")
    }
  ]




  return (
    <div>
      <Expenses expenses={expenses}/>

    </div>

  );
}

export default App;
