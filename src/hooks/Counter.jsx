import React, { Fragment, useEffect, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;

    return () => {
      console.log("cleanup");
    };
  });
  //   const count = array[0]; //this.state.count
  //   const setCount = array[1]; //this.setState()
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} Has clicked {count} Times !
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
