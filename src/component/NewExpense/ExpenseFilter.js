import { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  //   const [value, setValue] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    // setValue(e.target.value);
    props.value(e.target.value);
  };
  return (
    <div className="main">
      <form>
        <label htmlFor="years">Choose a year filter</label>
        <select
          name="years"
          id="years"
          value={props.selected}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </form>
    </div>
  );
}

export default ExpenseFilter;
