import ExpenseCard from "./ExpenseCards";
import './Expense.css';
import Card from "../Common-comp/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";




function Expense(props) {

  const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
  };

  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullTYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
        />
        {filteredExpense.map((expense) => 
          <ExpenseCard
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}  
          />)}
      </Card>
    </div>    
  );
}


export default Expense;


















