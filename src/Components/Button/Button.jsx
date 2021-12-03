
import styled from "styled-components";
import React from "react";
import Table from "react-bootstrap/Table";

export const Demo = () => {
  const [buttonColor, setButtonColor] = React.useState("undefined");

  const StyledButton = styled.button`
  color: ${(props) => props.buttonColor || "green"};
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid green;
  border-radius: 5px
`;

  const ChangedStyledDemo = styled(StyledButton)`
    color: red;
    border-color: orange;
  `;

  return (
    <>
      <StyledButton buttonColor={buttonColor}>First Button</StyledButton>
      <ChangedStyledDemo>Second Button</ChangedStyledDemo>
      <input
        type="text"
        name="color"
        value={buttonColor}
        onChange={(event)=>{setButtonColor(event.target.value)}}
      />
    </>
  );
};
