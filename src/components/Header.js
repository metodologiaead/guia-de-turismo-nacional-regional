import React from 'react'
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri'

import * as Styled from '../styles/HeaderLayout'
import { ButtonGhost } from '../styles/ButtonLayout'
import Logo from '../assets/images/logo_horizontal_metodologiaead.png'

const Header = ({ mode, toggleMode }) => (
  <Styled.Container>
    <div className="nav">
      <div>
        <img src={Logo} alt="Logo Metodologia EAD"></img>
      </div>
      <div>
        <ButtonGhost onClick={toggleMode}>
          <span>Modo Leitura</span>
          {mode === 'light' ? <RiEyeFill /> : <RiEyeCloseFill />}
        </ButtonGhost>
        <a className="buttonTell" href="tel:82999762839" target="_blank" rel="noopener noreferrer">
          (82) 99976-2839
        </a>
      </div>
    </div>
    <div className="TitleContent">
      <h3>Seja um Guia de Turismo Reginal</h3>
      <h2>com nosso curso de:</h2>
      <h3>
        Técnico em <br />
        GUIA DE TURISMO NACIONAL/REGIONAL <br />
        Totalmente EAD
      </h3>
    </div>
  </Styled.Container>
)

export default Header
