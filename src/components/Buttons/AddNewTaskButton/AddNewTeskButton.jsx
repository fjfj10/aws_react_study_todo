import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { FaPlus } from "react-icons/fa";
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function AddNewTeskButton({ target, setTarget }) {
    const [isrightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        if (target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if(target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target)
        }
    }


    return (
        <button css={S.SLayout} onClick={handleOpenClick}>
                <FaPlus css={S.SIcon} />
                <span css={S.SName}>Add New Task</span>
            </button>
    );
}


export default AddNewTeskButton;