import React from "react";
import { useRouter } from "next/router";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import Modal from "@components/Modal";
import { ScreenWrap, Container, Input, Button } from "components";
import { loginState, userState } from "src/state/userState";
import { useInput, useModal } from "src/hooks";

const Login = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setUser = useSetRecoilState(userState);
  const resetLogin = useResetRecoilState(loginState);
  const resetUser = useResetRecoilState(userState);

  const [inputs, onChangeInput, isValid] = useInput({
    id: "",
    name: "",
  });
  const [isOpenModal, handleModal, modalContent, setModalContent] =
    useModal(false);

  const login = () => {
    setIsLogin(true);
    setUser({ userId: inputs.id, userName: inputs.name });
    router.push(`/home`);
  };

  const onSubmit = () => {
    if (isValid) {
      login();
    } else {
      setModalContent({
        title: "로그인 실패!",
      });
      handleModal();
    }
  };

  const logout = () => {
    resetLogin();
    resetUser();
  };

  return (
    <Container>
      <ScreenWrap>
        <div className="w-[90%] flex flex-col gap-2">
          <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
          {isLogin ? (
            <Button onClick={logout}>로그아웃</Button>
          ) : (
            <>
              <Input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요"
                value={inputs.id}
                onChange={onChangeInput}
              />
              <Input
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
                value={inputs.name}
                onChange={onChangeInput}
              />
              <Button onClick={onSubmit}>로그인</Button>
            </>
          )}
          {isOpenModal && (
            <Modal modalData={modalContent} handleClose={handleModal}></Modal>
          )}
        </div>
      </ScreenWrap>
    </Container>
  );
};

export default Login;
