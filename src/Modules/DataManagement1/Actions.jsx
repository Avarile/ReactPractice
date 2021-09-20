export default function reducer( state, action ) {

  const { type, payload } = action;

  switch (type) {
    case "CHANGE_NAME":{
      return {
        ...state,
        name: payload.name
      };
    }
    case "RESET":{
      return {
        ...state,
        name:""
      }
    };
    default:
      return state;
  }
}