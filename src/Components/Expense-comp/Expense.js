import ExpenseCard from "./ExpenseCards";
import './Expense.css';
import Card from "../Common-comp/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList.jsx";
import ExpenseChart from "./ExpenseChart";




const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    
    const filterChangeHandler = (selectedyear) => {
      setFilteredYear(selectedyear); 
    }

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date?.getFullYear().toString() === filteredYear;
    })
    
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>    
  );
}


export default Expense;


















