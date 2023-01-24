import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false)
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseFormData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    //console.log(expenseFormData)
    props.onAddExpense(expenseFormData)
    setClicked(false)
  }

  const closeForm = () => {
    setClicked(false)
  }

  return (
    <div className='new-expense'>
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={closeForm}
        />
      ) : (
        <button onClick={() => setClicked(true)}> Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
