import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiCalendar } from 'react-icons/hi';
import * as S from "./Style";

function List({ title }) {
    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{title}</h2>
            <ul css={S.SListContainer}>
                <li css={S.SListBox(false)}>
                    <HiCalendar />
                    <span>Calender</span>
                    <div>12</div>
                </li>
                <li css={S.SListBox(true)}>
                    <HiCalendar />
                    <span>Calender</span>
                    <div>12</div>
                </li>
                <li css={S.SListBox(false)}>
                    <HiCalendar />
                    <span>Calender</span>
                    <div>12</div>
                </li>
            </ul>
        </div>
    );
}

export default List;