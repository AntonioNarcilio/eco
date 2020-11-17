import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Form, Input, Label } from './styles'
import BackIcon from '../../assets/images/icons/arrow-left 1.svg'
import Logo from '../../assets/images/logo_eco.svg' 

function CreatePoint() {
    let history = useHistory()

    function handleGoToLanding() {
        history.push('/')
    }

    return(
        <div>
            <Header>
                <img src={BackIcon} alt={'voltar'} onClick={handleGoToLanding}/>
                <img src={Logo} alt={'Logo'} />
            </Header>
            <Form>
                <h1>Informe os seus dados</h1>
                <div>
                    <Label>Nome</Label>
                    <Input/>
                </div>
                <div>
                    <Label>CNPJ</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Imagem</Label>
                    <Input/>
                </div>
                <div>
                    <Label>WhatsApp</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Endereço</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Bairro</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Complemento</Label>
                    <Input/>
                </div>
            </Form>
        </div>
    )
}

export default CreatePoint