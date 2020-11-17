import styled from 'styled-components'
import LandingImage from '../../assets/images/home_background.svg'

export const Container = styled.div`
    padding: 4rem ;
    position: relative;
    width: 40vw;
    h1{
        color: #125C34;
        font-size: 37px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        max-width: 480px;
        line-height: 46px
    }

`
export const BackgroundImage = styled.div`
    background-image: url(${LandingImage});
    background-repeat: no-repeat;
    background-size: contain;
    width: 50vw;
    height: 85vh;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5vh;
`
export const ActionsContainer = styled.div`
    margin-top: 3rem;
`
export const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        padding-right: 20px;
    }
    p {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }
`