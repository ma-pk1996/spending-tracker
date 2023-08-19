import React, {useState} from 'react';
import Expense from './Components/Expense-comp/Expense.js';
import NewExpense from "../../spending-tracker/src/Components/Expense-comp/NewExpense.jsx";

const FakeExpenses = [
  {id: 'e1', title: 'car rent', amount: 200, date: new Date(2021,7,13)},
  {id: 'e2', title: 'car wash', amount: 200, date: new Date(2020,7,13)},
  {id: 'e3', title: 'car repair', amount: 200, date: new Date(2022,7,13)},
  {id: 'e3', title: 'car dooni', amount: 200, date: new Date(2023,7,13)}
];

function App() {
  const [expenses, setExpense] = useState(FakeExpenses);

  const  setAddExpense = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense  onAddExpense={setAddExpense}/>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
