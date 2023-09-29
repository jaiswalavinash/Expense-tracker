import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'
function ExpenseItem(props){
    const {title, amount,date} = props.expense
    return(
        <li>
            <Card className='expense-item'>
            <ExpenseDate expenseDate = {date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${amount}</div>
                </div>
            </Card>
        </li>
    )
}
export default ExpenseItem;