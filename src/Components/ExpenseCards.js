import './ExpenseCards.css';
import ExpenseDate from './ExpenseDate';

function ExpenseCard (props) {

    return (
        <div className="ExpenseCard">
            <ExpenseDate date={props.expense.date} />
            <div className="ExpenseCard_Description">
                <h6>{props.expense.title}</h6>
                <div className="ExpenseCard__Price">${props.expense.amount}</div>      
            </div>
        </div>
    );
}

export default ExpenseCard;























