import React from "react";

export default function FilterBox({ handleChangeSearchInput }) {
  return (
    <div className="filterbox">
      <div className="inputContainer">
        <div className="inputLabel">First Name</div>
        <input
          placeholder="Enter first name"
          onChange={handleChangeSearchInput}
        />
      </div>
      <div className="genderSelectorContainer"></div>
    </div>
  );
}
