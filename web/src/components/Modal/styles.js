import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10px;
    background-color: rgba(0,0,0,0.8);
` 

export const Modal = styled.div`

    background-color: #fff;
    color: #000;
    width: 60%;
    height: 60%;
    border-radius: 20px;   

    button{
        border: none;
        background: none;
        right: calc(-100% + 64px);
        top: 16px;
        cursor: pointer;
        display: flex;
        position: relative;
        align-items: center;

        svg{
            font-size: 30px
        }
    }
`
export const Content = styled.div`

`
