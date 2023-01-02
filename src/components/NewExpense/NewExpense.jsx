import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isBeeingAdded, setIsBeeingAdded] = useState(false);

  function onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  }

  function startEditHandler() {
    setIsBeeingAdded(true);
  }

  function cancelEditHandler() {
    setIsBeeingAdded(false);
  }

  return (
    <div className="new-expense">
      {isBeeingAdded ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelEditHandler}
        />
      ) : (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
