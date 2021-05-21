import React, {useState} from 'react'
import './App.css';
import Expense from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Rich Dad Poor Dad",
    amount: 250,
    date: new Date(2020 ,7,14),
  },
  {
    id: "e2",
    title: "Think and Grow rich",
    amount: 260,
    date: new Date(2019 ,8,17),
  },
  {
    id: "e3",
    title: "Zero to One",
    amount: 350,
    date: new Date(2021 ,6, 4),
  },
  {
    id: "e4",
    title: "Othello",
    amount: 150,
    date: new Date(2018 ,12, 10),
  },
]

function App() {

const [Expenses, setExpenses] = useState(DUMMY_DATA)  

const addExpenseHandler = (expense) => {
setExpenses((prevdata) => {
  return [expense, ...prevdata]})
}

  return (
    <div className="App">
     <NewExpense onAddExpense={addExpenseHandler} />
     <Expense items={Expenses} />
    </div>
  );
}

export default App;
