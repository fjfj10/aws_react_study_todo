import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 15px 20px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
`;

export const SIcon = css`
    margin-right: 20px;
    /* &: 부모요소인 자기자신을 의미, & *: 자기자신의 모든 하위요소 */
    & * {
        color: #aaa;
    }
`;

export const SName = css`
    font-weight: 600;
    color: #aaa;
`;