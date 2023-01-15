import { FC, ReactNode } from "react";
import { CloseIcon } from "../../assets/svgs";
import Portal from "../Portal";

const Modal: FC<IProps> = ({
  heading,
  children,
  isOpen,
  handleClose,
  confirmLabel,
  cancelLabel,
}) => {
  return isOpen ? (
    <Portal>
      <div className="overlay" onClick={handleClose}></div>

      <section className="modal  overflow-y-auto" id="modal">
        <div className="">
          <header className="modal-header">
            <h3>{heading}</h3>
            <button className="btn" onClick={handleClose}>
              <CloseIcon className="text-muted-light dark:text-muted-dark" />
            </button>
          </header>
          <main>{children}</main>
        </div>

        <div className="action-bar">
          <button className="btn btn-outline mr-2">{cancelLabel}</button>
          <button className="btn btn-green">{confirmLabel}</button>
        </div>
      </section>
    </Portal>
  ) : null;
};

export default Modal;

interface IProps {
  heading: string;
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  cancelLabel: string;
  handleCancel: () => void;
  confirmLabel: string;
  handleConfirm: () => void;
}
