import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loginState, userState } from "src/state/userState";

const Header = () => {
  const router = useRouter();
  const user = useRecoilValue(userState);
  const isLogin = useRecoilValue(loginState);

  return (
    <header className="border-b p-2 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold" onClick={() => router.push("home")}>
          농장관리시스템
        </h1>
        {isLogin ? (
          <span className="text-sm">
            {user.userName}({user.userId})
          </span>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
