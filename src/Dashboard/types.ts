export interface IBookDetails {
  id?: string;
  title?: string;
  author?: string;
}

export type TBookDetails = keyof IBookDetails;

export interface IState {
  books: IBookDetails[];
  error: string;
}

export enum EACTIONS {
  GET_BOOKS = "GET_BOOKS",
  GET_BOOK_ERROR = "GET_BOOK_ERROR",
}

export interface IAction<TPayload> {
  type: EACTIONS;
  payload: TPayload;
}
