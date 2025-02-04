import React from "react";
import styled from "styled-components";
import backgroundImg from '../assets/clouds.jpg'
import sprite from '../assets/sprite_animated.gif'

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const InnerBody = styled.div`
    width: 92%;
    height: 96%;
    background-size: cover;
    background-position: center;
    border: 3px solid rgb(221, 96, 96);
`

export const Sprite = styled.img`
    width: auto;
    height: 200px;
`

export function Body( {
    props
} ) {
    return (
        <BodyContainer>
            <InnerBody style={{ backgroundImage: `url(${backgroundImg})` }}>
                <Sprite src={sprite} alt="loading..." />
            </InnerBody>
        </BodyContainer>
    );
}