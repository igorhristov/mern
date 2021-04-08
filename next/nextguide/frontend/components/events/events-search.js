import React, { useRef } from "react";
import Button from "../ui/button";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
            <option value="4">Apr</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">jyly</option>
            <option value="8">avg</option>
            <option value="9">seo</option>
            <option value="10">okt</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
