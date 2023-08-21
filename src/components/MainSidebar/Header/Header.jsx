import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { HiMenu, HiSearch } from "react-icons/hi";
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from "../../../store/sidebarStore";

function Header() {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    const handleMenuToggleClick = () => {
        setIsSidebarShow(!isSidebarShow);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitle}>Menu</h1>
                <button css={S.SToggleButton} onClick={handleMenuToggleClick}><HiMenu /></button>
            </div>
            {isSidebarShow && (
                <div css={S.SSearchBox}>
                    <HiSearch css={S.SSearchIcon}/>
                    <input css={S.SSSearchInput} type="search" />
                </div>
            )}
            
        </div>
        
    );
}

export default Header;