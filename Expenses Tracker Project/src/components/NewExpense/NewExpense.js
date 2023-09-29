import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
  const [addExpense,setAddExpense] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData)
    setAddExpense(false)
  }
  const AddExpenseHandler = () =>{
    setAddExpense(true)
  }
  const stopEditingHandler = () =>{
    setAddExpense(false)
  }
    return (
      <div className='new-expense'>
        {!addExpense && <button onClick={AddExpenseHandler}>Add Expense</button>}
        {addExpense && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} 
        onCancel = {stopEditingHandler}/>}
      </div>
    )
}

export default NewExpense;