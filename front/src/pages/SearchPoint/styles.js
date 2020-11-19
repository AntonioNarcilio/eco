import styled from "styled-components";

export const Container = styled.div`
    /* background-color: white; */
    margin: 0 auto;
    max-width: 60rem;
    /* height: 80vh; */
    font-family: 'Archivo', sans-serif;
    line-height: 34px;

    h1{
        font-weight: 800;
        font-size: 30px;
        color: #125C34;
    }

    p{
        font-weight: 400;
        font-size: 20px;
        color: #fff;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: yellow; */
`

export const EcoPointContainer = styled.div`
    margin: 0.5rem 0.9rem;
   
    position: relative;
	width: 17rem;
	height: 22rem;
	min-height: 320px;

	background-color: #fff;
	border-radius: 8px;

    img {
        width: 100%;
        height: 150px;

        object-fit: cover;

        border-radius: 8px 8px 0 0;
    }

    h1 {
        font-size: 20px;
        font-weight: 600;
        line-height: 34px;
        color: #125C34;
        padding: 0 4%;
    }
    h3 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #9C98A6;
        padding: 0 4% 0;
        line-height: 20px;
    }
    h6 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 34px;
        color: #C1BCCC;
        padding: 0 4% 0 4%;
    }
    .overlay{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        background-color: #fff;
        overflow: hidden;

        width: 100%;
        height: 0%;

        border-radius: 8px;
        /* padding: 5%; */

        transition: .5s ease;
    }
    .overlay h1 {
        left: 5%;
    }
    .overlay p {
        font-size: 14px;
        line-height: 24px;
        padding: 5%;
        color: #9C98A6;
    }
    &:hover .overlay {
       height: 100%;
    }
`