import React, { useEffect } from "react";

export default function ComponentA(name, greetings) {
  useEffect(() => {
    window.addEventListener("mousemove", onmousemove);
    console.log(mounted);
    return () => {
      window.removeEventListener("mousemove", onmousemove);
      console.log(unmount);
    };
  }, []);
  return (
    <>
      <p>
        Hello {name}, {greetings}
      </p>
    </>
  );
}
