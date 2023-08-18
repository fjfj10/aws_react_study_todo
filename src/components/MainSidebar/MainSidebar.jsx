import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import Header from './Header/Header';
import List from './List/List';

function MainSidebar(props) {
    return (
        <div css={S.SLayout} >
            <Header />
            <List title={"TASKS"}/>
            <List title={"LISTS"}/>
        </div>
        
    );
}

export default MainSidebar;