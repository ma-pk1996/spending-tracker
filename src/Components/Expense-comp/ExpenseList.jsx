import '../../Components/Expense-comp/ExpenseList.css';

import React from 'react';

import ExpenseCard from './ExpenseCards';


const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h3 className='expenses-list__fallback'>Found no expenses</h3>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => {
                <ExpenseCard 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </ul>
    );
}

export default ExpenseList;
