import React, { useState } from "react";
import Select from "react-select";

const gendersList = [
  { value: "All", label: "All" },
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
  { value: "Bigender", label: "Bigender" },
];

export default function FilterBox({
  selectedGender,
  setselectedGender,
  searchInputValue,
  setsearchInputValue,
}) {
  return (
    <div className="filterbox">
      <div className="inputContainer">
        <div className="inputLabel">First Name</div>
        <input
          placeholder="Enter first name"
          value={searchInputValue}
          onChange={(e) => {
            setsearchInputValue(e.target.value);
          }}
        />
      </div>
      <div className="genderSelectorContainer">
        <Select
          value={selectedGender}
          onChange={setselectedGender}
          options={gendersList}
        />
      </div>
    </div>
  );
}
