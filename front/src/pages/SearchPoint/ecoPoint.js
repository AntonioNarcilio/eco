import React from 'react'
import { EcoPointContainer } from './styles'

function EcoPoint({point}) {
    return (
        <EcoPointContainer>
            <img src={point.image} alt="Eco Ponto"/>
                <h1>{point.name}</h1>
                <h3>{point.items}</h3>
                <div className="overlay">
                    <h1>{point.name}</h1>
                    <p>
                        <b>CNPJ 👔</b>
                        <br />
                        {point.cnpj}
                        <br />
                        <b>Items coletáveis ♻</b>
                        <br />
                        {point.items}
                        <br />
                        <b>WhatsApp 📲</b>
                        <br />
                        {point.whatsapp}
                        <br />
                        <b>Endereço 🗺</b>
                        <br />
                        {point.address}
                        <br />
                        <b>Complemento 🔰</b>
                        <br />
                        {point.address2}
                    </p>
                </div>
                <h6>Passe o mouse para mais informações</h6>
        </EcoPointContainer>
    )
}
export default EcoPoint