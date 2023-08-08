import Expense from './Components/Expense';

function App() {
  const Expenses = [
    {id: 'e1', title: 'car rent', amount: 200, date: new Date(2023,7,13)},
    {id: 'e2', title: 'car wash', amount: 200, date: new Date(2023,7,13)},
    {id: 'e3', title: 'car repair', amount: 200, date: new Date(2023,7,13)}
  ];
  return (
    <div>
    <Expense items={Expenses} />
    </div>
  );
}

export default App;
