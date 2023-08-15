import React, {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm (props) {

    const [EnteredTitle,SetEnteredTitle] = useState('');
    const [EnteredAmount,SetEnteredAmount] = useState('');
    const [EnteredDate,SetEnteredDate] = useState('');

    function titleChangeHandler(event) {
        SetEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event) {
        SetEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event) {
        SetEnteredDate(event.target.value);
    }

    function submitHandler (event) {
        event.preventDefault();

        const expenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: EnteredDate
        }
        props.onSaveExpenseData();
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    }
    return (
        <><form className="new-expense__controls" onSubmit={submitHandler}>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={EnteredTitle} placeholder="ex. buying washing machine" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={EnteredAmount} min="0.1" step="0.1" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2023-12-31" value={EnteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </>
    )
}

export default ExpenseForm;












