import "./ExpenseForm.css";
const ExpenseForm = () => {
  function Logger(e) {
    // e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <div className="form">
      <div className="form-input">
        <label for="expense-title">Expense title</label>
        <input
          id="expense-title"
          name="expense-title"
          onChange={Logger}
        ></input>
      </div>
      <div className="form-input">
        <label for="expense-amount">Expense Amount</label>
        <input
          id="expense-amount"
          name="expense-amount"
          onChange={Logger}
        ></input>
      </div>
      <div className="form-input">
        <label for="expense-date">Expense Date</label>
        <input id="expense-date" name="expense-date" onChange={Logger}></input>
      </div>
      <div className="form-input">
        
      <button>Form-Button</button>
      </div>
    </div>
  );
};
export default ExpenseForm;
