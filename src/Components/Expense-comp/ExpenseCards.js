import React, { useState } from 'react';
import './ExpenseCards.css';
import ExpenseDate from '../Common-comp/ExpenseDate';
import Card from '../Common-comp/Card';



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























