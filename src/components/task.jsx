import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import note from '../assets/sticky note.png'

export const TaskContainer = styled.div`
    width: 170px;
    height: 170px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.5);
    border-radius: 20px;
    transition: 0.2s;
`

export const Note = styled.img`
    width: 100px;
    height: auto;
    padding: 5px 20px;
    transition: 0.15s;
`

export const Description = styled.h2`
    position: absolute;
    bottom: 0px;
    font-size: 15px;
    font-weight: bold;
    padding-left: 4%;
`

export function Task( {
    props, description
} ) {
    const [transparency, setTransparency] = React.useState(0);
    const [size, setSize] = React.useState('100px');

    const MouseOver = () => {
        setTransparency(0.3);
        setSize('105px');
    }

    const MouseOut = () => {
        setTransparency(0);
        setSize('100px');
    }

    return (
        <TaskContainer onMouseOver={MouseOver} onMouseOut={MouseOut} style={{background: `rgba(255, 255, 255, ${transparency})`}}>
            <Note  src={note} alt="note" style={{width: size}}/>
            <Description>{description}</Description>
        </TaskContainer>
    );
}