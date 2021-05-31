import { useEffect, useState } from "react";
import "./App.css";

function StateExample() {
  const [name, setname] = useState("hamid");

  useEffect(() => {
    //
  }, [name]);

  const handleChangeName = () => {
    setname("ali");
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={handleChangeName}>change name</button>
    </div>
  );
}

export default StateExample;
