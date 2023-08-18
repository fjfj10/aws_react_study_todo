import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiCalendar } from 'react-icons/hi';
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';

function List({ title, list }) {
    const navigate = useNavigate();
    const location = useLocation();
    // location.pathname.split("/")[1]문자열을 잘라 today만 들고오기 위함
    const pathName = location.pathname;
    
    const handleLinkClick = (path) => {
        navigate(path);
    }

    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{title}</h2>
            <ul css={S.SListContainer}>
                {list.map(item => {
                    // startsWith(item.path) item.path로 시작하는 것을 isSelected에 넣는다?
                    const isSelected = pathName.startsWith(item.path);
                    return(
                        // map은 key값이 있어야함 보통 id를 쓴다 => 배열의 부분 랜더링 때문에
                        <li css={S.SListBox(isSelected)} key={item.id} onClick={() => {
                            handleLinkClick(item.path);
                        }}>
                            <HiCalendar />
                            <span css={S.SListNmae(isSelected)}>{item.name}</span>
                            {!!item.count && (<div css={S.SCount(isSelected)}>{item.count}</div>)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;