import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { isSidebarShowState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';


function Calender(props) {
    const [count, setCount] = useState(0);
    const [saveCount, setSaveCount] = useState(0);

    //useEffact(마운트 때 실행될 함수, [상태변수]) 처음 랜더링될 때 무조건 한번은 실행됨, [상태변수]가 변할 때 실행
    // API연결하면 엄청 많이 사용함
    useEffect(() => {
        console.log("캘린더 컴포넌트 마운트됨");
        //Today 페이지로 넘어가면(페이지가 바뀌면) return이 실행됨
        return () => {
            console.log("캘린더 컴포넌트 언마운트됨");
        };
    }, []);

    // [] 비어있는 배열(= 대상이 없음)일 때는 페이지가 처음 랜더링 될 때 한번만 실행됨. [상태변수]가 변하지 않기 때문(대상이 없으니 변하는것이 없음)

    const handlePlusClick = () => {
        setCount(count+1);
    }
    const handleminusClick = () => {
        setCount(count-1);
    }

    const handleSaveCount = () => {
        setSaveCount(count);
    }


    return (
        <div css={S.SLayout}>
            <h1>{count}</h1>
            <h1>{saveCount}</h1>
            <button onClick={handlePlusClick}>+1</button>
            <button onClick={handleminusClick}>-1</button>
            <button onClick={handleSaveCount}>save</button>
        </div>
    );
}

export default Calender;