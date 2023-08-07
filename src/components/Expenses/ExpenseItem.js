import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const deleteExpenseHandler = (e) => {
    console.log("Deletes expense");
    // delete the expense via DOM manipulation
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </div>
  );
};

export default ExpenseItem;
