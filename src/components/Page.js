/* eslint-disable prettier/prettier */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import { PageLayout, FooterWrapper } from '../styles/PageLayout'
import { Typography } from '../styles/Typography'
import theme from '../constants/theme'
import { useTheme } from '../hooks/useTheme'

import Header from './Header'

import LogoVertical from '../assets/images/logo_vertical_metodologiaead.svg'

const Page = ({ children }) => {
  const [mode, toggleMode] = useTheme()

  const themeMode = mode === 'light' ? theme.light : theme.dark

  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={themeMode}>
        <Header mode={mode} toggleMode={toggleMode} />
        <PageLayout>{children}</PageLayout>
        <FooterWrapper>
          <footer>
            <img src={LogoVertical} alt="Logo Metodologia EAD"></img>
            <h2>
              AV.VENERAVEL JOAO VIEIRA CHAGAS ,111 CEP. 57.036.555 , JATIUCA Maceió/Al<br />
              e-mail: cpet@metodologiaead.com.br<br />
              Telefone: (82) 9 9976-2839<br />
              WhatsApp: (82) 9 9976-2839
            </h2>
            <div>
              <img src="" alt=""></img>
              <img src="" alt=""></img>
              <img src="" alt=""></img>
            </div>
            </footer>
            <div className="copy">
              <h3>© 2021, Metodologia EAD | Todos os direitos reservados. By Bellmont Sistema</h3>
            </div>
        </FooterWrapper>
      </ThemeProvider>
    </>
  )
}

export default Page
