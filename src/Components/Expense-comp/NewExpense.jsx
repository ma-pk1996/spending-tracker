import React from "react";

import ExpenseForm from "./ExpenseForm.jsx";

import "./NewExpense.css";






function NewExpense (props) {
    function SaveExpenseHandler (entereddata) {
        const expenseData = {
            ...entereddata,
            id: Math.random().toString()
        }
        props.onAddExpense();
    }
    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseHandler}/>
        </div>
    )
}



export default NewExpense;
















