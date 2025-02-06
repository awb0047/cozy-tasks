import React from "react";
import styled from "styled-components";
import sprite from '../assets/sprite.gif'
import smile from '../assets/sprite_smile.gif'
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
    width: 180px;
    height: auto;
    transition: 0.15s;

    &:hover {
        width: 200px;
    }
`

export function Login( {
    setClient
} ) {
    const [character, setCharacter] = React.useState(sprite);

    const googleLogin = () => {
        authorize()
            .then((response) => {
                setClient(response)
            })
            .catch((error) => {
            console.log(error);
            })
    }

    const MouseOver = () => {
        setCharacter(smile);
    }

    const MouseOut = () => {
        setCharacter(sprite);
    }

    return (
        <LoginContainer>
            <Upper>
                <Sprite src={character} alt="person" />
                <Bubble text={"Hey there! Click the button to login"}/>
            </Upper>
            <Upper>
                <LoginImg onClick={() => googleLogin()} src={login} alt="login" onMouseOver={MouseOver} onMouseOut={MouseOut}/>
            </Upper>
        </LoginContainer>
    );
}