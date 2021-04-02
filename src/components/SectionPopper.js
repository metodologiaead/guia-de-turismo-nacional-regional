/* eslint-disable prettier/prettier */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';

import { Container, PooperWrapper, HamburgerWrapper, Menu1, Menu2 } from '../styles/SectionPopperLayout'

const useStyles = makeStyles((theme) => ({
  paper: {
  },
}));

export default function SectionPopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClickLeft = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickRight = (event) => {
    setAnchorE2(anchorE2 ? null : event.currentTarget);
  };

  const openLeft = Boolean(anchorEl);
  const left = openLeft ? 'transitions-popper' : undefined;

  const openRight = Boolean(anchorE2);
  const right = openRight ? 'transitions-popper' : undefined;

  return (
    <Container>
      <div>
          <button aria-describedby={left} type="button" onClick={handleClickLeft}>
            <HamburgerWrapper>
              { anchorEl === null ? <div><span>Clique para Abrir</span><Menu1 alt="Menu Hamburger"/></div> : <div><span>Clique para Fechar</span><Menu2 alt="Menu Hamburger"/></div>}
            </HamburgerWrapper>
            { anchorEl === null ? <p>Abrir Detálhes</p> : <p>Fechar Detálhes</p>}
          </button>
      </div>
      <div>
          <button aria-describedby={right} type="button" onClick={handleClickRight}>
            <HamburgerWrapper>
            { anchorE2 === null ? <div><span>Clique para Abrir</span><Menu1 alt="Menu Hamburger"/></div> : <div><span>Clique para Fechar</span><Menu2 alt="Menu Hamburger"/></div>}
            </HamburgerWrapper>
            { anchorE2 === null ? <p>Abrir Informações</p> : <p>Fechar Informações</p> }
          </button>
      </div>
      <Popper id={left} open={openLeft} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              <PooperWrapper>
                <h2>Componentes Curriculares = Cursos Isolados</h2>
                <ul>
                  <li>Introdução a Administração - sg</li>
                  <li>Empreendedorismo - sg</li>
                  <li>Matemática Financeira - sg</li>
                  <li>Marketing de Serviços - sg</li>
                  <li>Serviços de Turismo e Viagens - dr</li>
                  <li>Revisão Geografia Geral - dr</li>
                  <li>Revisão História Geral - dr</li>
                  <li>Marketing Digital - sg</li>
                  <li>Fundamentos do Espanhol - sg</li>
                  <li>Fundamentos do Inglês - sg</li>
                  <li>Projeto Pratico em Turismo I</li>
                  <li>Elaboração de Roteiros e Pacotes - dr</li>
                  <li>Antropologia e Cultura - sg</li>
                  <li>Introdução a Técnicas de Negociação - rd</li>
                  <li>Gestão de Vendas e Negociação - sg</li>
                  <li>Teoria da História e Historiografia</li> 
                  <li>Gestão da Qualidade Total - sg</li>
                  <li>Marketing de Serviços voltado ao Turismo - dr</li>
                  <li>Projeto Pratico em Turismo II</li>
                  <li>Historia da Arte - sg</li>
                  <li>Multimodalidade Turística - dr</li>
                  <li>Análise de Mídias Sociais - rd</li>
                  <li>Ingles Avançado - Pratico  Nac / Reg  - dr</li>
                  <li>Primeiros Socorros - sg</li> 
                  <li>Plano de Negocio</li>
                  <li>Projeto Pratico em Turismo III</li>
                  <li>Trabalho de Conclusão de Curso de Guia de Turismo  </li>
                </ul>
              </PooperWrapper>
            </div>
          </Fade>
        )}
      </Popper>
      <Popper id={right} open={openRight} anchorEl={anchorE2} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              <PooperWrapper>
                <a style={{color: 'white'}} href="Metodologia e Certificação de acordo com a RESOLUÇÃO CNE/CP Nº 1, DE 5 DE JANEIRO DE 2021, que define as Diretrizes Curriculares Nacionais Gerais para a Educação Profissional e Tecnológica." target="_blank" rel="noopener noreferrer">Metodologia e Certificação de acordo com a RESOLUÇÃO CNE/CP Nº 1, 
                  DE 5 DE JANEIRO DE 2021, que define as Diretrizes Curriculares Nacionais
                  Gerais para a Educação Profissional e Tecnológica.
                </a>

                <h2>Requisitos para Matrícula</h2>
                <p>Conhecer o modelo de Certificação  aplicado pela Instituição Certificadora</p>
                <p>Os documentos comprobatórios devem ser entregues até a conclusão do Curso</p>
                <p>Verifique a documentação obrigatória</p>

                <h2>Metodologia de Ensino</h2>
                <p>
                  A Metodologia de Ensino esta baseada no aprendizado direcionado, onde o 
                  aluno possui um Guia de Estudo visando auxiliar em sua formação profissional.
                  A qual inclui varias Certificações e Formações Profissionais, durante a 
                  busca por sua Habilitação Técnica desejada, fornecendo instrumentos de
                   comprovação de sua qualificação e evolução profissional.
                </p>
                <p>
                O aluno apos a efetivação da matricula possui acesso ao Curso Técnico referencia
                 escolhido, o qual é composto por cursos isolados que referenciam os 
                 componentes curriculares do Curso Técnico escolhido.
                </p>
                <p>
                Todo o processo on-line é executado com Tutoria e Suporte, fornecendo
                 todos os instrumentos de apoio para o aprendizado. Ao termino de cada 
                 Curso Isolado (media superior ou igual  a 6,0), o aluno é Certificado
                  e pode agendar sua avaliação presencial em uma Unidade Remota .
                   Clique aqui e Verifique a Unidade mais próxima .
                </p>
                <p>
                Ao concluir todos os componentes curriculares, o aluno(a)
                 poderá solicitar seu Diploma Técnico (Modelo de Diploma),
                  devidamente registrado no Sistema de Consulta Pública de
                   Autenticidade de Diplomas e Certificados do MEC – SISTEC.
                    Informações de Diploma
                </p>

                <h2>Instituição Certificadora</h2>
                <p>
                  Os Cursos Técnicos à Distância oferecidos pelo EAD Técnico, 
                  são realizados em parceria com o Centro de Profissionalização e 
                  Educação Técnica – CPET (www.cpet.com.br), Instituição credenciada 
                  para ofertar Educação Técnica e Profissional na modalidade Presencial 
                  e a Distancia pela  Portaria nº 1175/2018-SEEC/GS.
                </p>
                <h2>Requisitos para Certificação</h2>
                <p>Ter sido aprovado em todos os componentes curriculares com média 
                  superior ou igual  a 6,0 (seis) / durante a pandemia do  COVID 19  
                  média superiro ou igual a 8,0 (oito)
                </p>
                <p>Ter sido aprovado no Trabalho de Conclusão de Curso com
                   média superior a 6,0 (seis)
                </p>
                <p>Enviar Cópia do RG e do CPF autenticados</p>
                <p>Enviar Comprovante de Residência</p>
                <p>Enviar Cópia do Histórico Escolar e do
                   Certificado de Conclusão do Ensino Médio (2º Grau) autenticados</p>
              </PooperWrapper>
            </div>
          </Fade>
        )}
      </Popper>
    </Container>
  );
}