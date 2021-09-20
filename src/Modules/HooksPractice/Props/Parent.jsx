import React from "react";

const ParentComponent = () => {
  return (
    <ChildComponent
      name="Avarile"
      children={[
        { name: "avarile", age: 37, sex: "male" },
        { name: "Emily", age: 34, sex: "female" },
        { name: "Anastasia", age: 6, sex: "female" },
      ]}
    ></ChildComponent>
  );
};

const ChildComponent = (message) => {
  return (
    <>
      <h1>Hi, {message.name}</h1>
      <p>Welcome to Dophin Hotel</p>
      {message.children.map((item, index) => {
        return (
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "auto",
            }}
          >
            <li key={index}>
              <h1
                style={{
                  color: "coral",
                }}
              >
                My name is {item.name}
              </h1>
              <p>I am {item.age} years old</p>
              <p>I am {item.sex}</p>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ParentComponent;
