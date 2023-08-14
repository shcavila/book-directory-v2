export interface IState {
  access_token: string;
  clicked: boolean;
  email: string;
  password: string;
  error?: any;
  showPassword: boolean;
}

export interface IProps {
  setIsAuthenticated: (access_token: string) => void;
}

export interface ICredential {
  email: string;
  password: string;
}

interface IPayload {
  access_token?: string;
  error?: any;
  clicked?: boolean;
  email?: string;
  password?: string;
}

export interface IAction<TPayload> {
  type: EACTIONS;
  payload: TPayload;
}

export type TPayloadKeys = keyof IPayload;

export enum EACTIONS {
  SIGN_IN_ERROR = "SIGN_IN_ERROR",
  INPUT_CHANGE = "INPUT_CHANGE",
}
