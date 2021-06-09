import React, { useEffect, useState } from "react";
import { mockUsers } from "../mockData/users";
import FilterBox from "./FilterBox";
import UserBox from "./UserBox";

export default function UsersList() {
  const [filteredList, setfilteredList] = useState(mockUsers);

  const [selectedGender, setselectedGender] = useState({
    value: "All",
    label: "All",
  });

  const [searchInputValue, setsearchInputValue] = useState("");

  useEffect(() => {
    let myNewList = mockUsers;

    if (selectedGender.value !== "All") {
      myNewList = myNewList.filter(
        (item) => item.gender === selectedGender.value
      );
    }

    myNewList = myNewList.filter((item) =>
      (item.first_name + " " + item.last_name)
        .toLowerCase()
        .includes(searchInputValue.toLowerCase())
    );

    setfilteredList(myNewList);
  }, [selectedGender, searchInputValue]);

  return (
    <div className="list">
      <h1>Users List</h1>
      <FilterBox
        selectedGender={selectedGender}
        setselectedGender={setselectedGender}
        searchInputValue={searchInputValue}
        setsearchInputValue={setsearchInputValue}
      />
      <div className="listgrid">
        {filteredList.map((singleUser) => (
          //   <div>{singleUser.first_name}</div>
          <UserBox data={singleUser} />
        ))}

        {filteredList.length === 0 && <h3>No user found.</h3>}
      </div>
    </div>
  );
}
