import styled from 'styled-components'
import media from 'styled-media-query'
import ImageHeader from '../assets/images/background_header.png'

export const Container = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 387px;

  ${media.lessThan('large')`
    min-height: auto;
  `}

  background-image: url(${ImageHeader});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: cover;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-width: 1124px;
    height: 60px;
    padding: 20px;
    margin: 0 auto;

    ${media.lessThan('large')`
    min-width: 800px;
    padding: 10px;
  `}
  }

  .nav div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav div img {
    width: 233px;
    height: auto;
  }

  .buttonTell {
    outline: none;
    border: 0;
    cursor: pointer;

    font-weight: bold;
    font-size: 1rem;

    width: 143px;
    height: 43px;

    color: #0d0d0d;

    background-color: ${(props) => props.theme.buttonPrimary};

    transition: all 0.3s;
  }

  .buttonTell:hover {
    outline: none;
    border: 0;

    background-color: ${(props) => props.theme.buttonSecondary};
  }

  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.textPrimary};
  }

  .TitleContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 1124px;
    margin: 0 auto;

    ${media.lessThan('large')`
    min-width: 800px;
  `}
  }

  .TitleContent div {
    padding: 60px;

    ${media.lessThan('large')`
    padding: 40px;
  `}
  }

  .TitleContent div h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.textPrimary};
  }

  .TitleContent div h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.textPrimary};
  }
`
