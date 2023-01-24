import React from 'react'

const ExpenseFilter = (props) => {
  const selHandler = (e) => {
    props.onFliterChange(e.target.value)
  }

  const yearList = ['2019', '2020', '2021', '2022', '2023']

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.filterYear} onChange={selHandler}>
          {yearList.map((year, i) => (
            <option key={i} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
