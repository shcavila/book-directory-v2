import { IState, IAction, EACTIONS } from "./types";

const reducer = (state: IState, action: IAction<Partial<IState>>) => {
  const { type, payload } = action;
  switch (type) {
    case EACTIONS.SIGN_IN_ERROR:
      return {
        ...state,
        ...payload,
      };
    case EACTIONS.INPUT_CHANGE:
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
