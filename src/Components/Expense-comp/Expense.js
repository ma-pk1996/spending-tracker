import ExpenseCard from "./ExpenseCards";
import './Expense.css';
import Card from "../Common-comp/Card";


function Expense(props) {
    return (
      <div>
        <Card className="expenses">
          {props.items.map(expense => <ExpenseCard
          title={expense.title}
          amount={expense.amount}
          date={expense.date}  
          />)}
        </Card>
      </div>    
    );
}


export default Expense;


















