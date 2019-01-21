const calcState = {
  value: "0",
  buttons: ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/", "MS", "MR", "C"],
  storedValue: null
}

const calcReducer = (state = calcState, action) => {
  switch (action.type) {
    case 'APPEND':
      return {
        ...state,
        value: state.value === "0" ? action.text : state.value + action.text
      }
    case 'CLEAR':
      return {
        ...state,
        value: "0"
      }
    case 'CALC':
      return {
        ...state,
        value: eval(action.value)
      }
    case 'STORE':
      return {
        ...state,
        storedValue: action.value
      }
    case 'RETRIEVE':
      return {
        ...state,
        value: state.storedValue ? state.storedValue : state.value
      }
    default:
      return state;
  }
}

export default calcReducer;