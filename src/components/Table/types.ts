import { IBookDetails } from "../../Dashboard/types";

export interface IProps {
  data: IBookDetails[];
  headers: string[];
  handleUpdate: (book: IBookDetails) => void;
  handleDeleteBook: (id: string) => void;
}

export interface IState {
  isOpen: boolean;
  id: string;
}

export enum EACTIONS {
  TOOGLE_DIALOG = "TOOGLE_DIALOG",
}

export interface IAction<TPayload> {
  type: EACTIONS;
  payload: TPayload;
}
