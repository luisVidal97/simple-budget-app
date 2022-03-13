import { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from './components/NewExpense/NewExpense';

function App() {

  const [ expenses, setExpenses ] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses( prev => ([ expense, ...prev ]));
  }

  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
