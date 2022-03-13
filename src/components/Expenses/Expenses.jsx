import { useState } from 'react'
import { Card } from '../UI/Card';
import { ExpensesFilter } from './ExpensesFilter';
import { ExpensesList } from './ExpensesList';
import { ExpensesChart } from './ExpensesChart';
import './Expenses.css';

export const Expenses = (props) => {

  const [ filteredByYear, setFilteredByYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredByYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter( expense => expense.date.getFullYear().toString() === filteredByYear );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter filterChangeHandler={filterChangeHandler} filteredByYear={filteredByYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  )
}
