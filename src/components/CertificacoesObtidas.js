/* eslint-disable prettier/prettier */
import React from 'react'
import { Container } from '../styles/CertificacoesObtidasLayout'

import IconCertificado from '../assets/images/icon_certificado.svg'

const CertificacoesObtidas = () => (
  <Container>
    <img src={IconCertificado} alt="Logo Cerfificado"></img>
    <h2>Certificações Obtidas</h2>
    <div className="BoxsWrapper">
      <div>
        <h3>25</h3>
        <p>
          Certificados referentes a cada Curso Isolado Livre <br />
          Cada curso referencia um Componente Curricular
        </p>
      </div>
      <div>
        <h3>03</h3>
        <p>
          <span>Cursos de Formação Profissional :</span>
          Auxiliar de Escritório Imobiliário – CBO 4110-05 <br />
          Assistente Administrativo – CBO 4110-10 <br />
          Auxiliar de Avaliador de Imóveis – CBO 4110-10
        </p>
      </div>
    </div>
  </Container>
)

export default CertificacoesObtidas

