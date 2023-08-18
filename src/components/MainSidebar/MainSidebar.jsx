import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import Header from './Header/Header';
import List from './List/List';
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from "../../store/sidebarStore";

function MainSidebar(props) {
    const [isSidebarShow, setIsSidebarShow] = useRecoilState(isSidebarShowState);
    

    // 이부분은 이후 백앤드에서 서버에서 불러오는걸로 처리 예정 지금은 배열로함
    const [mainMenuListArray, setMainMenuListArray] = useState({
        tesks: [
            {
                id: 1,
                path: "/upcomming",
                icon: "",
                name: "Upcomming",
                count: 12
            },
            { 
                id: 2,
                path: "/today",
                icon: "",
                name: "Today",
                count: 5
            },
            {
                id: 3,
                path: "/calendar",
                icon: "",
                name: "Calendar",
                count: 0
            },
            {
                id: 4,
                path: "/stickywall",
                icon: "",
                name: "Sticky Wall",
                count: 0
            }
        ],
        lists: [
            {
                id: 1,
                path: "/personal",
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                id: 2,
                path: "/work",
                icon: "",
                name: "Work",
                count: 0
            },
            {
                id: 3,
                path: "/list1",
                icon: "",
                name: "List1",
                count: 0
            }
        ]
    });
        

    return (
        <div css={S.SLayout(isSidebarShow)}>
            <Header />
            {isSidebarShow && (
                <>    
                    <List title={"TASKS"} list={mainMenuListArray.tesks}/>
                    <List title={"LISTS"} list={mainMenuListArray.lists}/>
                </>
            )}
        </div>
        
    );
}

export default MainSidebar;