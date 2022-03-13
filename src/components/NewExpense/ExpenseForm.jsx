import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {

  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ date, setDate ] = useState('');

  const titleChangeHnandler = (event) => {
    setTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = { title, amount: +amount, date: new Date(date) };

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');

    props.hideForm();
  }

  const cancelHandler = () => {
    props.hideForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHnandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2100-01-01' value={date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
