export interface IProps {
  message: string;
  isOpen: boolean;
  severity: "success" | "error" | "info" | "warning" | undefined;
  handleClose: (message: string | undefined) => void;
}
