/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import media from 'styled-media-query'
import Banner from '../assets/images/banner.png'

export const Container = styled.section`
    display: flex;

    width: 100%;
    height: 240px;

    background-image: url(${Banner});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;

    ${media.lessThan('small')`
    background-size: cover;
  `}
`