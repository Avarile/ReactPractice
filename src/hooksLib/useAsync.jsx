import React, { useState, useEffect, useCallback } from "react";

export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // this execute is not gonna be called unless asyncFunction changes
  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

const App = () => {
  const { execute, status, value, error } = useAsync();

  return (
    <>
      <div>
        {status === "idle" && <div>Start your journey by click a button</div>}
        {status === "success" && <div>{value}</div>}
        {status === "error" && <div> {error}</div>}
        <button onClick={execute} disabled={status === "pending"}>
          {status !== "pending" ? "Click me" : "Loading..."}
        </button>
      </div>
    </>
  );
};


// an async function for testing our hook
// will successfull 50% of the time

const testFunc = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(()=> {
      const random = Math.random()* 10
      random <= 5 ? resolve("Submitted successfully") : reject("Ho no, there was an error")
    }, 2000)
  } )
}
