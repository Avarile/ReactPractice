import React from 'react'

// example 1
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// React.memo is a higher order component.

// If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

// React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, it will still rerender when state or context change.

// By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.

// example 2
function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);

// React.memo() is a higher-order component (HOC), which is a fancy name for a component that takes a component as a prop and returns a component that prevents a component from re-rendering if the props (or values within it) have not changed.

// We’ll take the same example above but use React.memo() in our <Counts /> component. All we need to do is wrap our <Counts /> component with React.memo() like below:

import { useRef } from "react";
function Counts() {
  const renderCount = useRef(0);
  return (
    <div className="mt-3">
      <p className="dark:text-white">
        Nothing has changed here but I've now rendered:{" "}
        <span className="dark:text-green-300 text-grey-900">
          {(renderCount.current ++)} time(s)
      </span>
      </p>
    </div>
  );
}
export default React.memo(Counts);