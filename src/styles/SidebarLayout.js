/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;

    h2 {
        font-size: 0.8rem;
        font-weight: 800;
        color: ${(props) => props.theme.textPrimary};

        text-align: center;

        margin-bottom: 10px;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        padding: 10px;


        h2 {
            font-size: 0.8rem;
            font-weight: 800;
            color: ${(props) => props.theme.textPrimary};
            text-align: center;
        }

        h3 {
            font-size: 0.8rem;
            color: ${(props) => props.theme.textPrimary};

            span {
                font-size: 0.8rem;
                color: #D93B58;
                text-decoration-line: line-through;
            }
        }

        h4 {
            font-size: 0.8rem;
            color: ${(props) => props.theme.textPrimary};

            span {
                font-size: 2rem;
                color: #D93B58;
                font-weight: 800;
            }

            img {
                width: 20px;
                height: 20px;
                margin-left: 10px;
            }
        }

    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
    }
`

export const ItensWrapper = styled.div`
    background-color: #304673;
    margin: 15px;
    height: 95vh;
`