/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import MainSidebar from "../MainSidebar/MainSidebar"
import RightSubSidebar from "../RightSubSidebar/RightSubSidebar";

function MainLayout({ children }) {
    return (
        <div css={S.SLayout} >
            <MainSidebar />
            { children }
        </div>
    );
}

export default MainLayout;