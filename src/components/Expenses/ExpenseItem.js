import { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const newExpenseArray = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {newExpenseArray.map((expense) => (
        <ExpenseDetails
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </Card>
  );
};

export default ExpenseItem;
