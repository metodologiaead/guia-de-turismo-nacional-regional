/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useEffect } from "react"
import { Container, ItensWrapper  } from "../styles/SidebarLayout"

import Subscribe from "../components/Subscribe"
import IconCredito from "../assets/images/icon-credito.svg"
import IconBoleto from "../assets/images/icon-boleto.svg"

const Sidebar = () => {

    return (
      <Container>
        <ItensWrapper>
          <div className="contentWrapper">
            <h2>INVESTIMENTO</h2>
            <div>
              <h3>de <span>R$ 1.500,00</span> por</h3>
              <h4><span>R$ 700,00</span> à vista.</h4>
            </div><br />
            <div>
              <h4><span>R$ 66,66</span> em 12x no cartão. <img src={IconCredito} alt="Cartão" /></h4>
            </div><br />
            <div>
              <h4><span>R$ 83,33</span> em 12x no boleto. <img src={IconBoleto} alt="Boleto" /></h4>
            </div>
          </div>
          <h2>Matricule-se Já!</h2>
          <div className="sidebarWrapper">
            <Subscribe />
          </div>
        </ItensWrapper>
        </Container>
    );
}

export default Sidebar