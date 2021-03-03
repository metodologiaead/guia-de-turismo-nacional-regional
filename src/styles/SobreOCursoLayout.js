/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  div {
    margin-left: 10px;
  }

  span {
    font-size: 0.7rem;
    color: ${(props) => props.theme.textSecondary};
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 800;
    line-height: 2;
    color: ${(props) => props.theme.textSecondary};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.textSecondary}

    ${media.lessThan('small')`
      font-size: 0.5rem;
  `}
  }

  ul {
    margin-left: 10px;
  }

  ol {
    margin-left: 20px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${(props) => props.theme.textSecondary};
  }
`
