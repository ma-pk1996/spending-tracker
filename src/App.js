import ExpenseCard from './Components/ExpenseCards';


function App() {
  const Expenses = [
    {id: 'e1', title: 'car rent', amount: 200, date: new Date(2023,7,13)},
    {id: 'e2', title: 'car wash', amount: 200, date: new Date(2023,7,13)},
    {id: 'e3', title: 'car repair', amount: 200, date: new Date(2023,7,13)}
  ];
  return (
    <div>
      <h5>hello everyone</h5>
    <ExpenseCard 
      title={Expenses[0].title}
      amount={Expenses[0].amount}
      date={Expenses[0].date}
    ></ExpenseCard>
    <ExpenseCard 
      title={Expenses[1].title}
      amount={Expenses[1].amount}
      date={Expenses[1].date}
    ></ExpenseCard>
    <ExpenseCard 
      title={Expenses[2].title}
      amount={Expenses[2].amount}
      date={Expenses[2].date}
    ></ExpenseCard>
    </div>
  );
}

export default App;
