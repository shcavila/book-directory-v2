import { IBookDetails } from "../../Dashboard/types";

export interface IProps {
  title: string;
  data: IBookDetails;
  handleCancel: () => void;
  handleSubmit: (data: IBookDetails) => void;
}

export interface IState {
  book: IBookDetails;
}
export interface IAddBook {
  title: string;
  author: string;
}

export interface IUpdateBook {
  id: string;
  title: string;
  author: string;
}

export enum EACTIONS {
  INPUT_CHANGE = "INPUT_CHANGE",
}

export interface IPayload {
  book: IBookDetails;
}
export interface IAction<TPayload> {
  type: EACTIONS;
  payload: TPayload;
}
