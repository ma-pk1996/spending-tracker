import ExpenseCard from "./ExpenseCards";
import './Expense.css';
import Card from "../Common-comp/Card";


function Expense(props) {
    return (
        <Card className="expenses">
        {props.items.map((expense) => <ExpenseCard
          title={props.title}
          amount={props.amount}
          date={props.date}
        />)}
        </Card>
    );
}


export default Expense;


















