import React from 'react'
import { MessageContainer } from './styles'
import Sucesso from '../../assets/images/sucesso.svg'
import Erro from '../../assets/images/erro.svg'

function Message({type}) {
    return(
        <MessageContainer>
            <img src={type==='Sucesso'? Sucesso : Erro} alt={type}/>
            <h1>{type==='Sucesso'? 'Cadastrado com sucesso!' : 'Infelizmente não foi possivel efetuar o cadastro!'}</h1>
        </MessageContainer>
    )
}
export default Message