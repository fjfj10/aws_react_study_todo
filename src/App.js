import { Reset } from "styled-reset";
import MainLayout from "./components/MainLayout/MainLayout";
import { Global } from "@emotion/react";
import * as S from "./Styles/Common";
import { Route, Routes } from "react-router-dom";
import Today from "./pages/Today/Today";
import Calender from "./pages/Calender/Calender";
import React, { useState } from 'react';

function App() {
  return (
    <>
      <Reset />
      {/* 전역에 css를 적용시킬 때 Global사용 */}
      <Global styles={S.GSCommon} />
      <MainLayout>
        <Routes>
          {/* 경로에는 대문자 쓰는거 아님 */}
          <Route path="/today" element={ <Today /> }/>
          <Route path="/upcomming" />
          <Route path="/calendar" element={ <Calender /> }/>
          <Route path="/stickywall" />
        </Routes>
      </MainLayout>
      
    </>
  );
}

export default App;
