import { IState, IAction, EACTIONS } from "./types";

const reducer = (state: IState, action: IAction<Partial<IState>>) => {
  const { type, payload } = action;
  switch (type) {
    case EACTIONS.TOOGLE_DIALOG:
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
