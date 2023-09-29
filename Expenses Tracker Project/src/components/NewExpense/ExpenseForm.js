import React, {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('');
   
    const inputChangehandler = (identifier, value)=>{ // how can i call this function.
        if(identifier === 'title'){
            setEnteredTitle(value)
        }else if(identifier === 'date'){
            setEnteredDate(value)
        }else{
            setEnteredAmount(value)
        }
    }
    const submitHandler = (event) => {
       event.preventDefault();

       const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
       }
       props.onSaveExpenseData(expenseData)
       // Below are to reset state after form submission.
       setEnteredTitle('')
       setEnteredAmount('')
       setEnteredDate('')
    }

 return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               {/* <input type="text" onChange={titleChangeHandler} /> */}
               <input type="text" value={enteredTitle} onChange={(event) => inputChangehandler('title',event.target.value)} />

            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               {/* <input type="number" min= "0.01" step= "0.01" onChange ={amountChangeHandler} /> */}
               <input type="number" value={enteredAmount} min= "0.01" step= "0.01" onChange={(event) => inputChangehandler('amount',event.target.value)} />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               {/* <input type="date" min="2019-01-01" max="2023-08-31"  /> */}
               <input type="date" value={enteredDate} min="2019-01-01" max="2023-08-31" onChange={(event) => inputChangehandler('date',event.target.value)} />
            </div>
        </div>
        <div className="new-expense__actions">
           <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
 )
}
export default ExpenseForm;