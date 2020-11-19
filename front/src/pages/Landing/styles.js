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

    @media(max-width: 800px) {
        padding: 4rem 2rem;
        width: auto;
        img {
            width: 85vw;
        }
        h1 {
            margin-top: 4rem;
            font-size: 22px;
            line-height: 30px;
            width: 80vw !important;
        }
    }
`
export const BackgroundImage = styled.div`
    @media(min-width: 800px) {
        background-image: url(${LandingImage});
        background-repeat: no-repeat;
        background-size: contain;
        width: 50vw;
        height: 85vh;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 5vh;

    }
`
export const ActionsContainer = styled.div`
    margin-top: 10vh;
`
export const ButtonContainer = styled.button`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20rem;
    background-color: transparent;
    border: 1px solid transparent;
    position: relative;
    cursor: pointer;

    &::after,
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        transition: transform .2s ease-in-out;
        border-radius: 8px;
    }
    &::before {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: scaleY(0);
    }
    &::after {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: scaleX(0);
    }
    &:hover::before {
        transform: scaleY(1)        
    }
    &:hover::after {
        transform: scaleX(1)        
    }
    img {
        width: 40px;
        height: 48px;
        padding: 5px 10px;
        border-radius: 50px;
        display: flex;
        justify-self: center;
        align-self: center;
        transition: all 0.3s ease-in-out;
    }
    p {
        margin-left: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    @media(max-width: 800px) {
        p {
            font-size: 18px;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
        }
    }
    
`