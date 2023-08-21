import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { FaChevronRight } from "react-icons/fa";
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';


function TaskList({ target, setTarget }) {
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

    const handleCheckBoxClick = (e) => {
        // 버블링 방지(체크파크 클릭 시 RightSubSidebar가 열리는 것을 방지) = 위(부모요소)에서 오는 클릭 이벤트를 막겠다 이후 다른 이벤트 추가 가능
        // list자체에 클릭 이벤트를 줘서 하위 요소들도 클릭 이벤트가 적용됨 => 원치 않는경우 하위 요소에 방지를 걸어준다
        e.stopPropagation();
    }

    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" onClick={handleCheckBoxClick} />
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight />
            </li>
        </ul>
    );
}

export default TaskList;