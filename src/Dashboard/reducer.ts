import { IState, IAction, EACTIONS } from "./types";

const reducer = (state: IState, action: IAction<Partial<IState>>) => {
  const { type, payload } = action;
  switch (type) {
    case EACTIONS.GET_BOOKS:
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
