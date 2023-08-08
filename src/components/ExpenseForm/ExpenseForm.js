// changed file-data to trainer's data
import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    // passing expenseData from child to parent --> Expenseform to NewExpense.js
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// import { useState } from "react";
// import "./ExpenseForm.css";
// const ExpenseForm = () => {
//   const [editTitle, seteditTitle] = useState("");
//   const [editAmount, seteditAmount] = useState("");
//   const [editDate, seteditDate] = useState("");
//   // single useState for multiple states

//   // const [userInput, setUserInput] = useState({
//   //   editTitle: "",
//   //   editAmount: "",
//   //   editDate: "",
//   // });

//   const titleChangeHandler = (e) => {
//     // using object destructuring

//     // setUserInput({
//     //   ...userInput,
//     //   editTitle: e.target.value,
//     // });

//     // best way of doing above work

//     // setUserInput((prevState) => {
//     //   return {
//     //     ...prevState,
//     //     editTitle: e.target.value,
//     //   };
//     // });
//     seteditTitle(e.target.value);
//   };
//   const amountChangeHandler = (e) => {
//     seteditAmount(e.target.value);
//   };
//   const dateChangeHandler = (e) => {
//     seteditDate(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const expenseData = {
//       title:editTitle,
//       amount:editAmount,
//       date:new Date(editDate),
//     };
//     console.log(expenseData);
//     // adding value to the form inputs. TWO-WAY-BINDING
//     seteditTitle('');
//     seteditAmount('');
//     seteditDate('');
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="form">
//         <div className="form-input">
//           <label for="expense-title">Expense title</label>
//           <input
//             type="text"
//             id="expense-title"
//             name="expense-title"
//             value={editTitle}
//             onChange={titleChangeHandler}
//           ></input>
//         </div>
//         <div className="form-input">
//           <label for="expense-amount">Expense Amount</label>
//           <input
//             type="text"
//             id="expense-amount"
//             name="expense-amount"
//             value={editAmount}
//             onChange={amountChangeHandler}
//           ></input>
//         </div>
//         <div className="form-input">
//           <label for="expense-date">Expense Date</label>
//           <input
//             type="date"
//             id="expense-date"
//             name="expense-date"
//             value={editDate}
//             onChange={dateChangeHandler}
//           ></input>
//         </div>
//         <div className="form-input">
//           <button type="submit">
//             Form-Button
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };
// export default ExpenseForm;
