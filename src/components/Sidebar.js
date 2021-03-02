/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useEffect } from "react"
import { Container, ItensWrapper  } from "../styles/SidebarLayout"
import gsap from 'gsap'

import Subscribe from "../components/Subscribe"
import IconCredito from "../assets/images/icon-credito.svg"
import IconBoleto from "../assets/images/icon-boleto.svg"

const Sidebar = () => {

  useEffect(() => {
var action = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#Move",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
  action.to("Move", 
  {
  overflowX: "10px",
  })
  }, [])

    return (
      <Container className="Move">
        <ItensWrapper>
          <div className="contentWrapper">
            <h2>INVESTIMENTO</h2>
            <div>
              <h3>de <span>R$ 1.500,00</span> por</h3>
              <h4><span>R$ 700,00</span> à vista.</h4>
            </div><br />
            <div>
              <h4><span>R$ 66,66</span> em 12x <br/>no cartão. <img src={IconCredito} alt="Cartão" /></h4>
            </div><br />
            <div>
              <h4><span>R$ 83,33</span> em 12x <br />no boleto. <img src={IconBoleto} alt="Boleto" /></h4>
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