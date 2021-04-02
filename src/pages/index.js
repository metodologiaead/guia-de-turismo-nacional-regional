import React from 'react'

import SEO from '../components/SEO'
import { Container, MainWrapper, SidebarWrapper } from '../styles/PageLayout'
import Banner from '../components/Banner'
import SobreOCurso from '../components/SobreOCurso'
import SectionPopper from '../components/SectionPopper'
import Abstract from '../components/Abstract'
import Sidebar from '../components/Sidebar'
import SidebarMobile from '../components/SidebarMobile'
import PresentationVideo from '../components/PresentationVideo'

const HomePage = () => (
  <>
    <SEO title="Técnico em Guia de Turísmo Regional" />
    <Container>
      <MainWrapper>
        <Banner />
        <PresentationVideo />
        <SobreOCurso />
        <SectionPopper />
        <SidebarMobile />
      </MainWrapper>
      <Abstract />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
    </Container>
  </>
)

export default HomePage
