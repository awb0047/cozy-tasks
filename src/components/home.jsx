import React from "react";
import styled from "styled-components";
import sprite from '../assets/sprite_animated.gif'
import note from '../assets/sticky note.png'
import { Bubble, Task } from '../components'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Upper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const Lower = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Sprite = styled.img`
    width: auto;
    height: 200px;
`

export const Note = styled.img`
    width: auto;
    height: 100px;
`

export function Home( {
    props
} ) {
    return (
        <HomeContainer>
            <Upper>
                <Sprite src={sprite} alt="loading..." />
                <Bubble text={"Welcome! Your tasks for today:"}/>
            </Upper>
            <Lower>
                <Task description={"test discription"}/>
                <Task description={"test discription"}/>
            </Lower>
        </HomeContainer>
    );
}