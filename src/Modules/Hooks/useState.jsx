import React, { useState } from "react";

const Index = () => {
  const [state, setCount] = useState({ count1: 20, count2: 10 });

  return (
    <>
      <div>
        <p>count1: {state.count1}</p>
        <p>count2: {state.count2}</p>
      </div>
      <button
        onClick={() => {
          setCount((CurCount) => CurCount + 1);
          set;
        }}
      >
        Click me to Increment
      </button>
    </>
  );
};

export default Index;
