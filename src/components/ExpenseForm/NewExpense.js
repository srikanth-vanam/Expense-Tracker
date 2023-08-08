import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    // function to get data from child comp ExpenseForm
    const saveExpenseDataHandler=(userEnteredData)=>{
        const ExpenseData={
            ...userEnteredData,
            id:Math.random().toString()
        }
        console.log(ExpenseData);
        // passing expenseData from child to parent --> NE to app.js
        props.onAddExpense(ExpenseData);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;