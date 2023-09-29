import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"
 const ExpensesList = (props)=>{
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no Expenses</h2>
    }
    return (
    <ul className="expense-list">
       { props.items.map((expense) =>{
       return <ExpenseItem 
        key={expense.id}  
        expense = {expense} />
        })}
    </ul>
    )
}
export default ExpensesList