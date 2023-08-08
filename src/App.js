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
      expense={Expenses[0]}
    ></ExpenseCard>
    <ExpenseCard
      expense={Expenses[1]}
    ></ExpenseCard>
    <ExpenseCard
      expense={Expenses[2]}
    ></ExpenseCard>
    </div>
  );
}

export default App;
