import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from './styles.js'

import BackIcon from '../../assets/images/icons/arrow-left 1.svg'
import Logo from '../../assets/images/logo_eco.svg' 

function Header() {
    const history = useHistory()

    function handleGoToLanding() {
        history.push('/')
    }

    return(
        <HeaderContainer>
            <img src={BackIcon} alt={'voltar'} onClick={handleGoToLanding}/>
            <img src={Logo} alt={'Logo'} />
        </HeaderContainer>
    )
}
export default Header