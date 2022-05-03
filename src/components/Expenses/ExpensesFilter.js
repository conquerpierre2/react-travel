import React from 'react';

import './ExpensesFilter.css';




const ExpensesFilter = (props) => {

  const setChangeYearHandler = event => {
    props.onFilteredYear(event.target.value);

  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={setChangeYearHandler}>
          <option value='2022' onClick={setChangeYearHandler}>2022</option>
          <option value='2021' onClick={setChangeYearHandler}>2021</option>
          <option value='2020'  onClick={setChangeYearHandler}>2020</option>
          <option value='2019'  onClick={setChangeYearHandler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;