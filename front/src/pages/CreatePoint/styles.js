import styled from 'styled-components'

export const Header = styled.div`
    padding: 5vh 8vw 5vh 8vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        height: 30px;
    }

    img:first-of-type {
        cursor: pointer;
    }

`
export const Form = styled.div`
    background-color: #FFFFFF;
    margin: 0 auto 5vh;
    max-width: 600px;
    /* height: 40rem; */
    border: 1px  #E6E6F0;
    border-radius: 8px;
    padding: 20px 40px;
     
    h1 {
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        font-size: 22px;
        color: #125C34;
        line-height: 34px;
        padding-bottom: 20px;
        border-bottom: 1px solid #E6E6F0;
    }

    div {
        margin-top: 20px;
    }
    
    div:first-of-type {
        margin-top: 0px;
    }
`

export const Label = styled.p`
    color: #9C98A6;
    /* font-weight: 600; */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    margin: 0 0 7px;
`

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
    background-color: #FAFAFC;
    /* color: #9C98A6; */
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    padding: 10px 10px 10px 10px;
    display: flex;
    /* flex: 1; */

`