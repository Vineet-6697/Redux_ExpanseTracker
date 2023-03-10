import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <>
      <Card className="box">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
