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

export const Text = styled.h1`
    font-size: 120%;
    font-weight: bold;
`

export const Upper = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeftButton = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    left: 0;
    margin-left: 10px;
`

export const RightButton = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    background: Green;
    right: 0;
    margin-right: 10px;
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
    const [page, setPage] = React.useState(0);

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
                <LeftButton/>
                <Text>Todays Tasks!</Text>
                <RightButton/>
            </Upper>
            <Lower>
                {
                    tasks.map((task, i) => {
                        if (i >= page*4 && i <= (page*4) + 3) {
                            return <Task description={task.title}/>
                            //return <Task description={'page: ' + page + ' i: ' + i}/>
                        }
                        //return <Task description={'page: ' + page + ' i: ' + i}/>
                    })
                }
            </Lower>
        </HomeContainer>

        // <HomeContainer>
        //     <Upper>
        //         <Sprite src={sprite} alt="person" />
        //         <Bubble text={"Welcome! Your tasks for today:"}/>
        //     </Upper>
        //     <Lower>
        //         <TasksContainer>
        //             {
        //                 tasks.map((task, i) => {
        //                     return <Task description={task.title}/>
        //                 })
        //             }
        //         </TasksContainer>
        //     </Lower>
        // </HomeContainer>
    ) : (
        <Loading/>
    );
}