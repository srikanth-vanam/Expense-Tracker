import { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [filteredYear,setFilteredYear]=useState('2023');
  const changeFilterHandler=(filterYear)=>{
    setFilteredYear(filterYear);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      {props.items.map((expense) => ( 
      <ExpenseDetails
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
