import styled from 'styled-components'

export const Form = styled.div`
    background-color: #FFFFFF;
    margin: 0 auto;
    max-width: 600px;
    /* height: 40rem; */
    border: 1px  #E6E6F0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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

export const SelectableContainer = styled.div`
    /* background-color: blue; */
    width: 100%;
    /* height: 10rem; */

`

export const SelectableHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        color: #125C34;
        line-height: 34px;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 24px;
        color: #9C98A6;
    }
`

export const SelectableGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
`

export const SelectableContent = styled.div`
    height: 11.5rem;
    width: 11.5rem;
    background-color: ${(props)=> !props.selected? 'whiteSmoke' : '#EBFFF4'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem !important;
    
    &:hover{
        cursor: pointer;
    }
    img {
        width: 40%;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 24px;
        color: #9C98A6;
        margin: 0 !important;
    }
`

export const ActionsContainer = styled.div`
    border-top: 1px solid #E6E6F0;
    max-width: 600px;
    padding: 40px 40px;
    background-color: #FAFAFC;
    margin: 0 auto;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: space-between;
`

export const AlertMsg = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-left: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 24px;
        color: #9C98A6;
    }
`

export const FinishButton = styled.button`
    background-color: #E00303;
    color: #fff;
    font-family: 'Archivo', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 26px;
    border: 0;
    border-radius: 8px;
    padding: 15px 2.5rem;
    transition: all 0.2s ease-in-out;

    &:hover{
        cursor: pointer;
        background-color: #FD6161;
    }
`