import React, { useState } from "react";

const HookCounter = () => {
  const initState = { count1, count2 };
  const [{ count1, count2 }, setCount] = useState(initState);

  return (
    <>
      <button onClick={() => setCount((Currentcount) => Currentcount + 1)}>
        Increment by 1
      </button>
      <div>Count1: {count1}</div>
      <div>Count2: {count2}</div>
    </>
  );
};

export default HookCounter;
