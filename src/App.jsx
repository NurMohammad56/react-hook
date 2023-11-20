import React, { Fragment, useState } from "react";

const App = () => {
  // Count Number
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      {/*Count Number */}
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </Fragment>
  );
};

export default App;
