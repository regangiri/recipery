const initialState = {
  paymentClicked: false,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "paymentButtonToggle":
      return {
        ...state,
        paymentClicked: !state.paymentClicked,
      };
    default:
      return state;
  }
};

export default paymentReducer;
