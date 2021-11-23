import React, { useState } from "react";

export const useSubmit = (submitFunc) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      await submitFunc();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [handleSubmit, loading, error];
};




// Example 
function App() {
  const mySubmitFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10;
        rnd <= 5 ? resolve() : reject("Error occurred!");
      }, 2000);
    });
  };
  const [handleSubmit, loading, error] = useSubmit(mySubmitFunction);return (
    <div className="App">
      <button onClick={handleSubmit} disabled={loading}>
        {!loading ? "Click me" : "Loading..."}
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}
