import { IState, IAction, EACTIONS, IPayload } from "./types";

const reducer = (state: IState, action: IAction<IPayload>) => {
  const { type, payload } = action;
  switch (type) {
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
