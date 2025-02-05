import React from "react";
import styled from "styled-components";
import note from '../assets/sticky note.png'

export const TaskContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.5);
    border-radius: 20px;
    padding: 0px 20px;
    margin-bottom: 10px;
`

export const Note = styled.img`
    width: 40px;
    height: auto;
    padding: 0px 20px;
`

export const Description = styled.h2`
    font-size: 20px;
    font-weight: bold;
    padding-left: 4%;
`

export function Task( {
    props, description
} ) {
    return (
        <TaskContainer>
            <Note src={note} alt="note" />
            <Description>{description}</Description>
        </TaskContainer>
    );
}