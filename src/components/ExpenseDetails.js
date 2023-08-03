import './ExpenseDetails.css';
function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h4>{props.location}</h4>
      <div className="expense-item__price"> {props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
