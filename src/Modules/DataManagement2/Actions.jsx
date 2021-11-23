export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "physical_attack": {
      return {
        ...state,
        HP: HP,
      };
    }
    case "RESET": {
      return {
        ...state,
        name: "",
      };
    }
    default:
      return state;
  }
}
