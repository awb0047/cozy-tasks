import React from "react";
import styled from "styled-components";
import bubble_left from '../assets/bubble left.png'
import bubble_large_left from '../assets/bubble large left.png'
import bubble_right from '../assets/bubble right.png'

export const BubbleContainer = styled.div`
    width: auto;
    height: auto;
    position: relative;
    text-align: center;
    margin-bottom: 100px;
`

export const BubbleImg = styled.img`
    width: 200px;
    height: auto;
`

export const Text = styled.h1`
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
`

export function Bubble( {
    text
} ) {

    var bubble = bubble_left

    if (text.length > 50)
    {
        bubble = bubble_large_left
    }

    return (
        <BubbleContainer>
            <BubbleImg src={bubble} alt="bubble" />
            <Text>{text}</Text>
        </BubbleContainer>
    );
}