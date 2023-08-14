export interface IState {
  access_token: string;
}

interface DashboardPayload {
  access_token?: string;
}

export interface IAction {
  type: EDASHBOARD_ACTIONS;
  payload: DashboardPayload;
}

export enum EDASHBOARD_ACTIONS {
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
}

export type THandlersKeys = "update" | "add";
