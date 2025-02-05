import React from "react";
import styled from "styled-components";
import backgroundImg from '../assets/clouds.jpg'
import { Home } from '../components'

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

export function Body( {
    children
} ) {
    return (
        <BodyContainer>
            <InnerBody style={{ backgroundImage: `url(${backgroundImg})` }}>
                {children}
            </InnerBody>
        </BodyContainer>
    );
}