const intialState = {
  age: 21
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "AGE_UP":
      newState.age++;
      break;
    case "AGE_DOWN":
      newState.age--;
      break;
    case "AGE_RESET":
      newState.age = 21;
      break;
    case "IS_LOGIN":
        newState.isLogin= true;
      break;
    case "IS_LOG_OUT":
        newState.isLogin= false;
      break;
  }
  return newState;
};

export default reducer;
