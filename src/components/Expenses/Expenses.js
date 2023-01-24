import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [sel, setSel] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setSel(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === sel
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onFliterChange={filterChangeHandler} filterYear={sel} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
