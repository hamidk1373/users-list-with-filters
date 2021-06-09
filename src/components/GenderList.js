import React, { useState } from "react";
import { mockUsers } from "../mockData/users";
import filterbox from "./FilterBox";
import UserBox from "./UserBox";

export default function GenderList() {
  const [filterdGender, setfilterdGender] = useState(mockUsers);
  const handleSelect = (event) => {
    setfilterdGender(event.target.value);
  };
  const handleSelect = setfilterdGender.filter(
    (gender) =>
      gender.male.toLowerCase().includes(filterdGender.toLowerCase()) &&
      gender.femail.toLowerCase().includes(filterdGender.toLocaleLowerCase())
  );
}
