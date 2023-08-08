import Card from "../UI/Card";
import "./ExpenseDetails.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseDetails = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4>{props.location}</h4>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseDetails;
