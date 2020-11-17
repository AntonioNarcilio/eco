import React from 'react'
import { ButtonContainer, Container, ActionsContainer, BackgroundImage } from './styles'

function CreatePoint() {
    return(
        <div>
        <Container>
            {/* <p>Landing page</p> */}
            <h1>Para aqueles que se preocupam com o meio ambiente!</h1>
            <ActionsContainer>
                <ButtonContainer>
                    <p>Procurar eco ponto</p>
                </ButtonContainer>
                <ButtonContainer>
                    <p>Cadastrar eco ponto</p>
                </ButtonContainer>
            </ActionsContainer>
        </Container>
        <BackgroundImage/>
        </div>
    )
}

export default CreatePoint