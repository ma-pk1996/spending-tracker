import ExpenseCard from "./ExpenseCards";
import './Expense.css';
import Card from "../Common-comp/Card";


function Expense(props) {
    return (
        <Card className="expenses">
        <ExpenseCard
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpenseCard
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        <ExpenseCard
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        </Card>
    );
}


export default Expense;


















