import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="border-b p-2 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold" onClick={() => router.push("home")}>
          농장관리시스템
        </h1>
        {/* TODO: Q1-2 로그인 상태 관리 
            - 아래 태그에 사용자 명과 아이디가 출력 되도록 해주세요
        */}
        <span className="text-sm">사용자 명(사용자 아이디)</span>
      </div>
    </header>
  );
};

export default Header;
