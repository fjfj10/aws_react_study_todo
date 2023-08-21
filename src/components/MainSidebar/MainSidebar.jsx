import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import Header from './Header/Header';
import List from './List/List';
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from "../../store/sidebarStore";

// 어떤 페이지에서든 불러올 수 있어야하기 때문에 MainLayout에 종속
function MainSidebar() {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    
    // 백앤드 배우면 API연결해서 서버에서 가지고 올 예정
    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        tasks: [
            {
                id: 1,
                path: "/upcoming",
                icon: "",
                name: "Upcoming",
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
            },
        ],
        lists: [
            {
                id: 1,
                path: "",
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                id: 2,
                path: "",
                icon: "",
                name: "Work",
                count: 0
            },
            {
                id: 3,
                path: "",
                icon: "",
                name: "List 1",
                count: 0
            }
        ]
    });

    return (
        <div css={S.SLayout(isSidebarShow)}>
            <Header/>
            {isSidebarShow && (
                <>
                    <List title={"TASKS"} list={mainMenuListArray.tasks}/>
                    <List title={"LISTS"} list={mainMenuListArray.lists}/>
                </>
            )}
            
        </div>
    );
}

export default MainSidebar;