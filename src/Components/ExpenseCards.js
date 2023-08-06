import './ExpenseCards.css';

function ExpenseCard () {
    let ExpenseDate = [];
    let ExpenseTitle = [];
    let ExpensePrice = [];
    return (
        <div className="ExpenseCard">
            <div>{ExpenseDate}</div>
            <div className="ExpenseCard_Description">
                <h6>{ExpenseTitle}</h6>
                <div className="ExpenseCard__Price">${ExpensePrice}</div>      
            </div>
        
        </div>
    );
}

export default ExpenseCard;























