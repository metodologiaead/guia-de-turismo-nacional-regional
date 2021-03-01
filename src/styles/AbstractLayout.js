/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import styled from "styled-components"
import Broker  from "../assets/images/broker-illustration.png"


export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    align-items: center;

    background-image: url(${Broker});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;

    width: 100%;
    height: 450px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: rgba(229, 229, 229, 0.87);
        padding: 10px;

        margin-left: 20px;
    }

    li {
        font-size: 1rem;
        font-weight: 800;
        color: #0D0D0D;
        margin-top: 5px;
    }
`