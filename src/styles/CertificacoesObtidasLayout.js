/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 363px;

    background: linear-gradient(
        103.42deg, #304673 0%, 
        #4665A7 35.12%, 
        #5876B4 62.91%, 
        #6684C1 86.5%, 
        #81AAFF 100.65%
        );

    img {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 800;
        color: ${(props) => props.theme.textPrimary}
    }

    ${media.lessThan('small')`
        height: auto;
        padding: 20px 0;
  `}
    
    .BoxsWrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;

        margin-top: 40px;
        padding: 0 30px;

        ${media.lessThan('small')`
            display: flex;
            flex-direction: column
        `}
    }

    .BoxsWrapper div {
        display: flex;
        flex-direction: column;

        text-align: center;

        padding: 5px;

        background-color: ${(props) => props.theme.background};
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.7);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.7);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.7);
    }

    .BoxsWrapper div h3 {
        font-size: 1.5rem;
        font-weight: 800;
        color: ${(props) => props.theme.textSecondary}
    }

    .BoxsWrapper div p {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        color: ${(props) => props.theme.textSecondary}
    }

    .BoxsWrapper div p span {
        font-size: 1rem;
        font-weight: 800;
        color: ${(props) => props.theme.textSecondary}
    }
`