import { css } from "@emotion/react"; 

export const SLayout = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px;
`;

export const STitle = css`
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 600;
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
`;

export const SListNmae = css`
    
`;