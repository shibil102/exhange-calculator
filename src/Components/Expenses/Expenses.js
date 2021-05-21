import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from './ExpenseList'
import Card from "../UI/Crad";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from './ExpenseChart'

function Expenses(props) {
  const [ExpenseFilter, setExpenseFilter] = useState("");

  const ExpenseFilterHandler = (filterValue) => {
    setExpenseFilter(filterValue);
  };

  const FilterValue = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === ExpenseFilter;
  });



  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          Year={ExpenseFilter}
          onExpenseFilter={ExpenseFilterHandler}
        />
        <ExpenseChart expenses={FilterValue} />
      <ExpenseList items={FilterValue} />
      </Card>
    </div>
  );
}

export default Expenses;
