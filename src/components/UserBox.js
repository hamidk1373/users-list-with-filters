import React from "react";

// export default function UserBox({ data:{ first_name, last_name, ip_address } }) {
export default function UserBox({ data }) {
  const { first_name, last_name, ip_address, gender } = data;

  return (
    <div className="userItem">
      <h4>{`${first_name} ${last_name}`}</h4>
      <h6>{ip_address}</h6>
      <h6>{gender}</h6>
    </div>
  );
}
