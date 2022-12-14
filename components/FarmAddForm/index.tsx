import React from "react";
import axios from "axios";
import Modal from "@components/Modal";
import { Input, Button } from "components";
import { useInput, useModal } from "src/hooks";

const FarmAddForm = () => {
  const [inputs, onChangeInput, isValid] = useInput({ farm: "", crop: "" });
  const [isOpenModal, handleModal, modalContent, setModalContent] =
    useModal(false);

  const addFarm = async () => {
    const response = await axios.post(`/api/addfarm`, inputs);
    if (response.status === 200) {
      setModalContent({
        title: "농장 추가 성공!",
        content: response.data.result,
      });
    }
    handleModal();
  };

  const onSubmit = () => {
    if (isValid) {
      addFarm();
    } else {
      setModalContent({
        title: "농장 추가 실패!",
      });
      handleModal();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 px-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span>농장 명</span>
            <Input
              name="farm"
              type="text"
              value={inputs.farm}
              onChange={onChangeInput}
            />
          </div>

          <div className="flex flex-col">
            <span>작물명</span>
            <Input
              name="crop"
              type="text"
              value={inputs.crop}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <Button onClick={onSubmit}>저장</Button>
      </div>
      {isOpenModal && (
        <Modal modalData={modalContent} handleClose={handleModal}></Modal>
      )}
    </>
  );
};

export default FarmAddForm;
