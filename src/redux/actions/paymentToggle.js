export const togglePayment = () => {
  return {
    type: "paymentButtonToggle",
  };
};

export const togglePaymentButtonToggle = () => {
  return (dispatch) => {
    dispatch(togglePayment());
  };
};
