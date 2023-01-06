import { FC, ReactNode } from "react";
import { CloseIcon } from "../../assets/svgs";
import Portal from "../Portal";

const Modal: FC<IProps> = ({ heading, children, isOpen, handleClose }) => {
  return isOpen ? (
    <Portal>
      <div className="overlay" onClick={handleClose}></div>

      <section className="modal">
        <header className="modal-header">
          <h3>{heading}</h3>
          <button className="btn" onClick={handleClose}>
            <CloseIcon className="text-muted-light dark:text-muted-dark" />
          </button>
        </header>
        <main>{children}</main>
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
}
