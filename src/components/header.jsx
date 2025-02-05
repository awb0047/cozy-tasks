import React from "react";
import styled from "styled-components";
const { ipcRenderer } = require("electron");

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: static;
    -webkit-app-region: drag;
`
export const Text = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding-left: 4%;
`

export const ButtonContainer = styled.div`
    width: auto;
    height: 70%;
    margin-left: auto;
    margin-right: 4%;
    display: flex;
    gap: 5px;
    justify-content: right;
    align-items: center;

`

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background: rgb(236, 162, 162);
    border: 3px solid rgb(221, 96, 96);
    -webkit-app-region: no-drag;
`

export function Header( {
    text
} ) {

    const settings = () => {
        console.log("Open Settings");
    }

    const minimize = () => {
        ipcRenderer.send('minimize')
    }

    const close = () => {
        ipcRenderer.send('close')
    }

    return (
        <HeaderContainer>
            <Text>{text}</Text>
            <ButtonContainer>
                <Button onClick={() => settings()}>O</Button>
                <Button onClick={() => minimize()}>_</Button>
                <Button onClick={() => close()}>X</Button>
            </ButtonContainer>
        </HeaderContainer>
    );
}