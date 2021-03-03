import styled from 'styled-components'
import media from 'styled-media-query'
import ImageHeader from '../assets/images/background_header.png'

export const Container = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 387px;

  background-image: url(${ImageHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.lessThan('small')`
      height: auto;
  `}

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

    ${media.lessThan('medium')`
    min-width: 700px;
    padding: 10px;
  `}

  ${media.lessThan('small')`
    flex-direction: column;
    min-width: 100px;
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
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
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

    ${media.lessThan('medium')`
    min-width: 700px;
  `}

    ${media.lessThan('small')`
    min-width: 280px;
    height: auto;
  `}
  }

  .TitleContent h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.textPrimary};
  }

  .TitleContent h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.textPrimary};

    ${media.lessThan('small')`
    width: 280px;
  `}
  }
`
