import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { isSidebarShowState, isRightSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isrightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    useEffect(() => {
        // 페이지를 옮길 때 RightSubSidebar이 무조건 닫히도록
        return () => {
            setIsRightSubSidebar(false);
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isrightSubSidebar)}>
            {children}
        </div>
    );
}

export default MainContainer;