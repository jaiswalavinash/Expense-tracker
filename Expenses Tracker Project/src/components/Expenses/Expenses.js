import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../NewExpense/ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';
function Expenses(props){
  const [filteredYear, setfilteredYear] = useState('2020')
      const filterChangeHandler = selectedYear =>{
        setfilteredYear(selectedYear)
      }
      const filterExpenses = props.expenses.filter((expense)=>{
          return expense.date.getFullYear().toString() === filteredYear
      })
      return (
        <>
          <Card className='expenses'>
            {/* <p> we are hidding data of {filteredInfoText} years.</p> */}
            <ExpenseFilter selected = {filteredYear} 
            onChangeFilter = {filterChangeHandler} />
            <ExpensesChart expenses = {filterExpenses} />
            <ExpensesList items={filterExpenses} />
          </Card>
        </>
      )
}
export default Expenses;