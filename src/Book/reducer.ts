import { IState, IAction, EDASHBOARD_ACTIONS } from "./types";

const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case EDASHBOARD_ACTIONS.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
