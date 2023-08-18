import { css } from "@emotion/react"; 

export const SLayout = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px;
`;

export const STitle = css`
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 600;
    cursor: default;
`;

export const SListContainer = css`

`;
// 함수를 거쳐서 css를 바로 return
export const SListBox = (isSelected) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    ${isSelected && "background-color: #eaeaea;"}
    /* 아래 위 둘 중 하나 사용 결과는 동일 */
    /* background-color: ${isSelected ? "#eaeaea" : "transparent"}; */
    cursor: pointer;
`;

export const SListNmae = (isSelected) => css`
    display: inline-block;
    flex-grow: 1;
    margin-left: 5px;
    font-size: 14px;
    ${isSelected && "font-weight: 600;"}
`;

export const SCount = (isSelected) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 20px;
    font-size: 11px;
    font-weight: 900;
    background-color: ${isSelected ? "#fff" : "#eaeaea"};
`;