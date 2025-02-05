import React from "react";
import styled from "styled-components";
import sprite from '../assets/sprite_animated.gif'
import login from '../assets/login.png'
import { Bubble } from '../components'
import { authorize } from '../utils/api'

export const LoginContainer = styled.div`
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

export const Sprite = styled.img`
    width: auto;
    height: 200px;
`

export const LoginImg = styled.img`
    width: 200px;
    height: auto;
`

export function Login( {
    setClient
} ) {

    const googleLogin = () => {
        authorize()
            .then((response) => {
                setClient(response)
            })
            .catch((error) => {
            console.log(error);
            })
    }

    return (
        <LoginContainer>
            <Upper>
                <Sprite src={sprite} alt="person" />
                <Bubble text={"Hey there! Click the button to login"}/>
            </Upper>
            <Upper>
                <LoginImg onClick={() => googleLogin()} src={login} alt="login" />
            </Upper>
        </LoginContainer>
    );
}