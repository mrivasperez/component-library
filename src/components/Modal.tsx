import { PropsWithChildren, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose, children }: PropsWithChildren<ModalProps>) => {
  // prevent overflow scroll
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white shadow-xl border border-gray-300 rounded-lg">{children}</div>
    </div>,
    document.getElementById("modal-container")!
  );
};

export default Modal;
