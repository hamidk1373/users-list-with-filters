import React from "react";

export default function FilterBox({ handleChangeSearchInput, handleSelect }) {
  return (
    <div className="filterbox">
      <div className="inputContainer">
        <div className="inputLabel">First Name</div>
        <input
          placeholder="Enter first name"
          onChange={handleChangeSearchInput}
        />
      </div>
      <div className="genderSelectorContainer">
        <label for="gender">Gender:</label>

        <select name="gender" id="gender" onChange={handleSelect}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="all">all</option>
        </select>
      </div>
    </div>
  );
}
