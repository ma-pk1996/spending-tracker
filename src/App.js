import React, {useState} from 'react';
import Expense from './Components/Expense-comp/Expense.js';
import NewExpense from "../../spending-tracker/src/Components/Expense-comp/NewExpense.jsx";

const Expenses = [
  {id: 'e1', title: 'car rent', amount: 200, date: new Date(2023,7,13)},
  {id: 'e2', title: 'car wash', amount: 200, date: new Date(2023,7,13)},
  {id: 'e3', title: 'car repair', amount: 200, date: new Date(2023,7,13)}
];

function App() {
  
  
  function setAddExpense(recieveddata) {
    
  }
  return (
    <div>
      <NewExpense  onAddExpense={setAddExpense}/>
      <Expense items={Expenses} />
    </div>
  );
}

export default App;
