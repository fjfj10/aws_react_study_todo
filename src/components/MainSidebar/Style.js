import { css } from "@emotion/react";

export const SLayout = (isShow) => css`
    position: relative;
    transition: left 0.8s ease;
    left: ${isShow ? "0px" : "-210px"};
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
`;