export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = (number) => {
  return {
    type: "DECREMENT",
    payload: number
  };
};

export const signin = () => {
    return {
        type: 'SIGN_IN'
    }
}