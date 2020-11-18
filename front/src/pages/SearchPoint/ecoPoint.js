import React from 'react'
import { EcoPointContainer } from './styles'

function EcoPoint() {
    return (
        <EcoPointContainer>
            <img src="https://cyberkada.weebly.com/uploads/5/1/7/4/5174049/913406_orig.gif" alt="image"/>
                <h1>Nome eco ponto</h1>
                <h3>Papelão, Garrafas Pet, Lâmpadas</h3>
                <div class="overlay">
                    <p>
                        <h1>Nome eco ponto</h1>
                        <b>CNPJ 👔</b>
                        <br />
                        123456789
                        <br />
                        <b>Items coletáveis ♻</b>
                        <br />
                        Papelão, Garrafas Pet, Lâmpadas
                        <br />
                        <b>WhatsApp 📲</b>
                        <br />
                        999999999
                        <br />
                        <b>Endereço 🗺</b>
                        <br />
                        Rua Suécia
                        <br />
                        <b>Complemento 🔰</b>
                        <br />
                        Numero 25 
                    </p>
                </div>
                <h6>Passe o mouse para mais informações</h6>
        </EcoPointContainer>
    )
}
export default EcoPoint