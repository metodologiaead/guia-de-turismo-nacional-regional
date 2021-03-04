/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: auto;
    
    ${media.lessThan('small')`
        align-items: center;
        justify-content: center;
  `}

    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin: 10px 0;

        ${media.lessThan('small')`
        max-width: 375px;
  `}
    }
`
