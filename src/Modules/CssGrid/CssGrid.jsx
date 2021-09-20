import React from "react";
import "./CssGrid.styles.css";

export default function CssGrid() {
  return (
    <>
      <h1 className="grid-title"> Css Grid</h1>
      <div className="grid-container">
        <div
          style={{
            backgroundColor: "red",
            fontSize: "large",
            textAlign: "center",
            height: "50px",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "green",
            fontSize: "large",
            textAlign: "center",
            height: "50px",
          }}
        >
          2
        </div>
        <div
          style={{
            backgroundColor: "black",
            fontSize: "large",
            textAlign: "center",
            color: "white",
            height: "50px",
          }}
        >
          3
        </div>
        <div
          style={{
            backgroundColor: "blue",
            fontSize: "large",
            textAlign: "center",
            color: "white",
            height: "50px",
          }}
        >
          4
        </div>
        <div
          style={{
            backgroundColor: "cadetblue",
            fontSize: "large",
            textAlign: "center",
            height: "50px",
          }}
        >
          5
        </div>
        <div
          style={{
            backgroundColor: "orange",
            fontSize: "large",
            textAlign: "center",
            height: "50px",
          }}
        >
          6
        </div>
      </div>
    </>
  );
}
