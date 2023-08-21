import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/sidebarStore';

// 각페이지에 따라 다른 내용이 나와야 하기 때문에 MainLayout이 아닌 페이지에 종속
function RightSubSidebar({ children }) {
    const [isrightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarState);

    return (
        <div css={S.SLayout(isrightSubSidebar)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;