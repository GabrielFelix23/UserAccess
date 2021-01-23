import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Menu = styled.div`
    background: rgb(28,211,211);
    background: linear-gradient(180deg, rgba(28,211,211,1) 54%, rgba(0,0,0,0.8603641285615808) 100%);
    width: 210px; 
    height: 100%;
	overflow: hidden;
	position: fixed;
    top: 0;
    left: 0;
   
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{
        font-size: 14px;
        color: #fff;
        margin-top: 10px;
    }
` 

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    span{
        display: flex;
        align-items:center;
    
        color: #fff;
        margin-top: 20px;
        font-size: 15px;
        padding: 10px;
    }
    .activated{
            background: #143047;
            width: 100%;
            height: 30px;
        }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    background: #fff;
    padding: 15px;
    width: 150px;
    height: auto;
    border-radius: 10px;
    margin: 20px 0 10px 0;
    padding: 10px;

    img{
        width: 50px;
        margin: 0 5px;
    }
    h1{
        color: #143047;
    }
`
