import { Reset } from "styled-reset";
import MainLayout from "./components/MainLayout/MainLayout";
import { Global } from "@emotion/react";
import * as S from "./Styles/Common";

function App() {
  return (
    <>
      <Reset />
      {/* 전역에 css를 적용시킬 때 Global사용 */}
      <Global styles={S.GSCommon} />
      <MainLayout>
        
      </MainLayout>
      
    </>
  );
}

export default App;
