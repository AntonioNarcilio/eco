import React from 'react'
import { ButtonContainer, Container, ActionsContainer, BackgroundImage } from './styles'
// import App from './App'
import LogoImg from '../../assets/images/logo_eco.svg'
import EcoTruck from '../../assets/images/icons/Eco_automobile.svg'
import Search from '../../assets/images/icons/Search.svg'

function Landing() {
    return(
        <div>
        <Container>
            {/* <p>Landing page</p> */}
            <img src={LogoImg} alt={'Logo'}/>
            <h1>Para aqueles que se preocupam com o meio ambiente!</h1>
            <ActionsContainer>
                <ButtonContainer>
                    <img src={Search} alt={"Search"}/>
                    <p>Procurar eco ponto</p>
                </ButtonContainer>
                <ButtonContainer>
                    <img src={EcoTruck} alt={"EcoTruck"}/>
                    <p>Cadastrar eco ponto</p>
                </ButtonContainer>
            </ActionsContainer>
        </Container>
        <BackgroundImage/>
        </div>
    )
}

export default Landing