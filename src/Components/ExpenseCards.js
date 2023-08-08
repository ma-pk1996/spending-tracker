import './ExpenseCards.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


function ExpenseCard (props) {

    return (
        <Card className="ExpenseCard">
            <ExpenseDate date={props.date} />
            <div className="ExpenseCard_Description">
                <h6>{props.title}</h6>
                <div className="ExpenseCard__Price">${props.amount}</div>      
            </div>
        </Card>
    );
}

export default ExpenseCard;























