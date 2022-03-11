
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';

export const Expenses = (props) => {

  return (
    <Card className='expenses'>
      {
        props.expenses.map((expense) =>
          <ExpenseItem {...expense} />
        )
      }
    </Card>
  )
}
