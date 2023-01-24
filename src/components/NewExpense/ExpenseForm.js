import React, { useState } from 'react'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amt, setAmt] = useState('')
  const [date, setDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //  title: '',
  //  amt: '',
  //  date: ''
  // })

  const titleHandler = (e) => {
    setTitle(e.target.value)
    // setUserInput({
    //  ...userInput,
    //  title: e.target.value
    // })
    // setUserInput((prevState) => {
    //  return { ...prevState, title: e.target.value }
    // })
  }

  const AmtHandler = (e) => {
    setAmt(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   amt: e.target.value,
    // })
  }

  const DateHandler = (e) => {
    setDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: title,
      amount: +amt,
      date: new Date(date),
    }

    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmt('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amt}
            onChange={AmtHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={DateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
