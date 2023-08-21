import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import MainContainer from '../../components/MainContainer/MainContainer';
import Header from '../../components/MainContainer/Header/Header';
import AddNewTeskButton from '../../components/Buttons/AddNewTaskButton/AddNewTeskButton';
import TaskList from '../../components/Lists/TaskList/TaskList';
import RightSubSidebar from "../../components/RightSubSidebar/RightSubSidebar"

function Today(props) {
    const [target, setTarget] = useState(null);



    return (
        <>
            <MainContainer>
                <Header title={"Today"} count={5}/>
                <AddNewTeskButton target={target} setTarget={setTarget}/>
                <TaskList target={target} setTarget={setTarget}/>
            </MainContainer>
            <RightSubSidebar>

            </RightSubSidebar>
        </>
        
    );
}

export default Today;