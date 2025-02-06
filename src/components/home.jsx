import React from "react";
import styled from "styled-components";
import sprite from '../assets/sprite_animated.gif'
import { Bubble, Loading, Task } from '../components'
import { getTasks } from "../utils/api";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
`
export const Upper = styled.div`
    width: 100%;
    height: 50%;
    max-height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Lower = styled.div`
    width: 100%;
    height: 50%;
    max-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TasksContainer = styled.div`
    width: calc(100% - 20px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    padding-top: 10px;
    overflow-y:auto;
    background: rgba(255,255,255,0.3);
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
    client
} ) {
    const [loading, setLoading] = React.useState(true);
    const [tasks, setTasks] = React.useState([]);

    getTasks(client)
        .then((response) => {
            setTasks(response);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })

    return (!loading) ? (
        <HomeContainer>
            <Upper>
                <Sprite src={sprite} alt="person" />
                <Bubble text={"Welcome! Your tasks for today:"}/>
            </Upper>
            <Lower>
                <TasksContainer>
                    {
                        tasks.map((task, i) => {
                            return <Task description={task.title}/>
                        })
                    }
                </TasksContainer>
            </Lower>
        </HomeContainer>
    ) : (
        <Loading/>
    );
}