import { ModalDataType, UseModalType } from "libs/type";
import { useCallback, useState } from "react";

const useModal = (initialValue: boolean): UseModalType => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);
  const [modalContent, setModalContent] = useState<ModalDataType>({
    title: "",
  });

  const handleModal = useCallback(
    () => setIsOpenModal(!isOpenModal),
    [isOpenModal]
  );

  return [isOpenModal, handleModal, modalContent, setModalContent];
};

export default useModal;
