import React from "react";
import { Button, Portal } from ".";
import { ModalDataType } from "libs/type";

const Modal = ({
  modalData,
  handleClose,
}: {
  modalData: ModalDataType;
  handleClose: () => void;
}) => {
  const { title, content } = modalData;
  return (
    <Portal>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl text-center font-bold ">{title}</h1>
        {content && (
          <div className="flex justify-center	gap-2 text-l">
            <p className="text-l">{content.farm}</p>
            <p className="text-l font-bold">{content.crop}</p>
          </div>
        )}
        <Button onClick={handleClose}>닫기</Button>
      </div>
    </Portal>
  );
};

export default Modal;
