import React, { useState } from "react";
import { ScreenWrap, Container, Input, Button } from "components";
import { loginState, userState } from "src/state/userState";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";

//TODO: Q1-1 로그인 상태 관리
// 상태관리 라이브러리 (context, redux, recoil 등) 을 활용해서 로그인 상태를 관리하는 기능을 개발 해주세요
// 라이브러리 사용은 자율입니다.
// 로그인이 완료되면 /home 라우터로 이동해야합니다.

const Login = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setUser = useSetRecoilState(userState);
  const resetLogin = useResetRecoilState(loginState);
  const resetUser = useResetRecoilState(userState);

  const [inputs, setInputs] = useState({
    id: "",
    name: "",
  });

  const onClickLogin = () => {
    setIsLogin(true);
    setUser({ userId: inputs.id, userName: inputs.name });
    router.push(`/home`);
  };

  const onClickLogout = () => {
    resetLogin();
    resetUser();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container>
      <ScreenWrap>
        <div className="w-[90%] flex flex-col gap-2">
          <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
          {isLogin ? (
            <Button onClick={onClickLogout}>로그아웃</Button>
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
              <Button onClick={onClickLogin}>로그인</Button>
            </>
          )}
        </div>
      </ScreenWrap>
    </Container>
  );
};

export default Login;
