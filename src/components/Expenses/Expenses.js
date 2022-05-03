import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState} from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021')

   

    const filterExpenseHandler= enteredYear => {
          setFilteredYear(enteredYear)

    }

    return <div>

    
    <Card className="expensess"> 
    
    <ExpensesFilter  selected={filteredYear} onFilteredYear={filterExpenseHandler}/>
    {props.listOfExpenses.map(expense => <ExpenseItem title={expense.title} amount = {expense.amount} date= {expense.date}/>)}
    

</Card>
</div>



}

export default Expenses;