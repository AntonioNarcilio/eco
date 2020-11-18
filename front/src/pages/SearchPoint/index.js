import React from 'react'

import Header from '../../components/header'
import { Container, MainContainer, EcoPoint } from './styles'

function SearchPoint() {
    return(
        <>
        <Header/>
        <Container>
            <h1>Encontre um ponto de coleta</h1>
            <p><strong>3 pontos</strong> existentes</p>
            <MainContainer>
                <EcoPoint/>
                <EcoPoint/>
                <EcoPoint/>
                <EcoPoint/>

            </MainContainer>
        </Container>
        </>
    )
}

export default SearchPoint