/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { ImMenu3, ImMenu4 } from 'react-icons/im'
import media from 'styled-media-query'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  padding: 32px 10px;

  ${media.lessThan('small')`
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 52px 10px 0 10px;
  `}

  button {
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: underline;

    background-color: ${(props) => props.theme.background};
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.7);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.7);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.7);

    width: 346px;
    height: 100px;

    ${media.lessThan('large')`
    width: 306px;
    font-size: 1.2rem;
  `}

    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.textTertiary};
    }

`

export const PooperWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  max-width: 300px;
  height: 450px;
  padding: 10px;

  ${media.lessThan('large')`
  max-width: 280px;
  `}

  ${media.lessThan('small')`
    height: 350px;
  `}

  overflow: auto;
  color: #F2F2F2;

  ::-webkit-scrollbar {
    width: 12px;
    height: auto;
    overflow-y: auto;
}
 
  /* aqui é para personalizar o fundo da barra, neste caso estou colocando um fundo cinza escuro*/
  ::-webkit-scrollbar-track {
  background: #0D0D0D;
}
 
  /* aqui é a alça da barra, que demonstra a altura que você está na página
  estou colocando uma cor azul clara nela*/
  ::-webkit-scrollbar-thumb {
  background: #D93B58;
  }

  h2 {
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.4;
    text-align: center;
    margin: 10px 0;
  }

  ul {

  }

  li {
    font-size: 0.8rem;
    font-weight: 400;
    margin: 5px 0;
    padding: 5px;
    background-color: rgba(242,221,114,0.9);
    color: #0D0D0D;
  }

  p {
    font-size: 0.8rem;
    font-weight: 200;
    text-align: center;
    margin-top: 10px;
  }
`

export const HamburgerWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    div {
      display: flex;
    }
    span {
      font-size: 0.5rem;
      margin-right: 5px;
      transform: translateY(-12px);
    }
`

export const Menu1 = styled(ImMenu4)`
      width: 20px;
      height: 20px;
      transform: translateY(-20px);
      color: ${(props) => props.theme.textSecondary};
`

export const Menu2 = styled(ImMenu3)`
      width: 20px;
      height: 20px;
      transform: translateY(-20px);
      color: ${(props) => props.theme.textSecondary};
`

