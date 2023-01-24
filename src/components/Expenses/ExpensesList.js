import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses...</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.filteredExpenses.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            date={e.date}
            title={e.title}
            amt={e.amount}
          />
        )
      })}
    </ul>
  )
}

export default ExpensesList
