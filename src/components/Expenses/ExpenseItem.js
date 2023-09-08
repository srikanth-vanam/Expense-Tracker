import { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const newExpenseArray = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });
  // using conditional rendering for display msg
  // let expenseContent=<p>No Expense-items to display here</p>;
  // this is Jsx syntax
  // if(newExpenseArray.length > 0){
  //   expenseContent=newExpenseArray.map((expense) => (
  //     <ExpenseDetails
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       location={expense.location}
  //     />
  //   ))
  // }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {/* one way of using conditional rendering */
      /* {newExpenseArray.length === 0 && <p>No items to display</p>}
      {newExpenseArray.length > 0 &&
        newExpenseArray.map((expense) => (
          <ExpenseDetails
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))} */
      }
      
      {/* another way of using conditional rendering */
      /* {newExpenseArray.length === 0 ? (
        <p>No items to display</p>
      ) : (
        newExpenseArray.map((expense) => (
          <ExpenseDetails
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))
      )} */
      }
      {/* another way of using conditional rendering */}
      {/* {expenseContent} */}
      {/* showing display msg on screen if there is only item
      {newExpenseArray.length === 1?(<p>Only single Expense here. Please add more...</p>):(<p></p>)} */}
      <ExpensesChart expenses={newExpenseArray} />
      <ExpensesList items={newExpenseArray} />
    </Card>
  );
};

export default ExpenseItem;
