import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import Header from '../../components/header'
import EcoPoint from './ecoPoint'
import { Container, MainContainer } from './styles'

function SearchPoint() {
    const [ points, setPoints ] = useState([])
    const [ totalPoints, setTotalPoints] = useState(0)
    useEffect(()=>{
        Axios.get('http://0.0.0.0:3333/point')
        .then(response=>{
            setPoints(response.data.places)
            setTotalPoints(response.data.total)
        }).catch(error=>{
            console.log(error);
        })
    },[])
    
    return(
        <>
        <Header/>
        <Container>
            <h1>Encontre um ponto de coleta</h1>
            <p><strong>{totalPoints} pontos</strong> existentes</p>
            <MainContainer>
                {points.map((point, index)=>(
                    <EcoPoint point={point} key={index}/>
                ))}
            </MainContainer>
        </Container>
        </>
    )
}

export default SearchPoint