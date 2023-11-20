import React, { Fragment, useState } from "react";

const App = () => {
  /*1. // Count Number
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  */
  //  2. Object using useState()
  /*
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    id: 12345,
  });

  const inputOnChange = (key, value) => {
    setPerson((prevObj) => ({
      ...prevObj,
      [key]: value,
    }));
  };
  */

  return (
    <Fragment>
      {/* 1. //Count Number 
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>    
      */}

      {/*2. Input on change 
       <h1>Person: {person["name"]}</h1>
      <h1>Age: {person["age"]}</h1>
      <h1>Id: {person["id"]}</h1>

      
      <label>Name</label>
      <input
        onChange={(e) => inputOnChange("name", e.target.value)}
        value={person["name"]}
        type="text"
        name=""
        id=""
      />

      <label>Age</label>
      <input
        onChange={(e) => inputOnChange("age", e.target.value)}
        value={person["age"]}
        type="text"
        name=""
        id=""
      />

      <label>Id</label>
      <input
        onChange={(e) => inputOnChange("id", e.target.value)}
        value={person["id"]}
        type="text"
        name=""
        id=""
      /> */}

      <h1></h1>
    </Fragment>
  );
};

export default App;
