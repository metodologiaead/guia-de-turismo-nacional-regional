import React from 'react'

import SEO from '../components/SEO'
import { Container, MainWrapper, SidebarWrapper } from '../styles/PageLayout'
import Banner from '../components/Banner'
import SobreOCurso from '../components/SobreOCurso'
import CertificacoesObtidas from '../components/CertificacoesObtidas'
import Complementacao from '../components/Complementacao'
import SectionPopper from '../components/SectionPopper'
import Abstract from '../components/Abstract'
import Sidebar from '../components/Sidebar'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <MainWrapper>
        <Banner />
        <SobreOCurso />
        <CertificacoesObtidas />
        <Complementacao />
        <SectionPopper />
      </MainWrapper>
      <Abstract />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
    </Container>
  </>
)

export default HomePage
