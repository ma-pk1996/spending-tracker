import React, { useState } from 'react';
import './ExpenseCards.css';
import ExpenseDate from '../Common-comp/ExpenseDate';
import Card from '../Common-comp/Card';



function ExpenseCard (props) {
    const [title, settitle] = useState(props.title);
    const clickHandler = () => {
        settitle('updated!');
    }
    return (
        <Card className="ExpenseCard">
            <ExpenseDate date={props.date} />
            <div className="ExpenseCard_Description">
                <h6>{title}</h6>
                <div className="ExpenseCard__Price">${props.amount}</div>      
            </div>
            <button onClick={clickHandler}>click me</button>
        </Card>
    );
}

export default ExpenseCard;























