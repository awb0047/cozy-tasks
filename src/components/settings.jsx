import React from "react";
import styled from "styled-components";

export const SettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
`

export const Upper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
`

export const Lower = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h1`
    font-size: 120%;
    font-weight: bold;
`

export function Settings( {
    props
} ) {
    return (
        <SettingsContainer>
            <Upper>
                <Text>Settings</Text>
            </Upper>
            <Lower>
                <Text>Coming Soon!</Text>
            </Lower>
        </SettingsContainer>
    );
}