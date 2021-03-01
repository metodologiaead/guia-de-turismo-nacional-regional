/* eslint-disable quotes */
import styled from 'styled-components'
import media from 'styled-media-query'

export const PageLayout = styled.main`
  display: flex;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  min-height: 100vh;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 740px 384px;
  grid-template-rows: auto auto;
  grid-template-areas: 'M S';
  margin: 0 auto;

  ${media.lessThan('large')`
    grid-template-columns: 640px 334px;
  `}
`

export const MainWrapper = styled.main`
  grid-area: M;
  width: 100%;
  min-height: 100vh;
`

export const SidebarWrapper = styled.div`
  grid-area: S;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  position: sticky;
  top: 0;

  background-color: #5f92eb;
`

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  background-color: #4665a7;

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px;
  }

  footer > img {
    width: 185px;
    height: 94px;
  }

  footer h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.textPrimary};
    margin-top: 10px;
    text-align: center;
  }

  .copy {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;
    background-color: #0d0d0d;

    color: #f2f2f2;

    font-size: 1rem;
  }
`
