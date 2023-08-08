import './ExpenseCards.css';

function ExpenseCard (props) {
    return (
        <div className="ExpenseCard">
            <div>{props.expense.date.toString()}</div>
            <div className="ExpenseCard_Description">
                <h6>{props.expense.title}</h6>
                <div className="ExpenseCard__Price">${props.expense.amount}</div>      
            </div>
        </div>
    );
}

export default ExpenseCard;























