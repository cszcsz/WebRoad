import ACTIONS from "./actions";

const reducer = (
  state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
