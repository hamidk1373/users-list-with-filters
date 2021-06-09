import React, { useState } from "react";
import { mockUsers } from "../mockData/users";
import FilterBox from "./FilterBox";
import UserBox from "./UserBox";

export default function UsersList() {
  const [filteredList, setfilteredList] = useState(mockUsers);

  const handleChangeSearchInput = (e) => {
    setfilteredList(
      mockUsers.filter((item) =>
        (item.first_name + " " + item.last_name)
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="list">
      <h1>Users List</h1>
      <FilterBox handleChangeSearchInput={handleChangeSearchInput} />
      <div className="listgrid">
        {filteredList.map((singleUser) => (
          //   <div>{singleUser.first_name}</div>
          <UserBox data={singleUser} />
        ))}
      </div>
    </div>
  );
}
