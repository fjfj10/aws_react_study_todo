import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
    height: ${520 - 117}px;
    overflow-y: auto;
`;

export const SListBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 15px 20px;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
`;

export const SListContent = css`
    display: flex;
    align-items: center;

`;

export const SCheckBox = css`
    margin-right: 10px;
`;