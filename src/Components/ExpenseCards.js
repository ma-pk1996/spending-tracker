import './ExpenseCards.css';

function ExpenseCard (props) {
    return (
        <div className="ExpenseCard">
            <div>{props.date.toString()}</div>
            <div className="ExpenseCard_Description">
                <h6>{props.title}</h6>
                <div className="ExpenseCard__Price">${props.amount}</div>      
            </div>
        
        </div>
    );
}

export default ExpenseCard;























