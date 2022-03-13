import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { useState } from 'react'


export const NewExpense = (props) => {

  const [activeForm, setActiveForm] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData =  {
      ...enteredExpenseData,
      id: new Date().getTime(),
    };
    props.addExpenseHandler(expenseData);
  }

  const showForm = () => {
    setActiveForm(true)
  }

  const hideForm = () => {
    setActiveForm(false)
  }

  return (
    <div className='new-expense'>
      {
        activeForm ? 
          <ExpenseForm onSaveExpenseData={onSaveExpenseData} hideForm={hideForm}/>
          : <button type='button' onClick={showForm}>Add New Expense</button>
      }
    </div>
  )
}
