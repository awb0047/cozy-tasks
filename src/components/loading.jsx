import React from "react";
import styled from "styled-components";

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h1`
    font-size: 30px;
    font-weight: bold;
`

export function Loading( {
    props
} ) {
    return (
        <LoadingContainer>
            <Text>Loading...</Text>
        </LoadingContainer>
    );
}