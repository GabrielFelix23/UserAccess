import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 580px;
    margin: 0 9px 10px 0;
`

export const Body = styled.div`
    width: 100%;
    background: #EEEEEE;
    height: 300px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    overflow: auto;
    overflow-x: hidden;

    span{
        font-size:12px;
    }

    svg{
        margin-right: 2px;
        font-size: 15px;
    }

    section{
        display: flex;
        flex-direction: column;
    }

    main{
        display: grid;
        grid-template-columns: 8fr 2fr 5fr 6fr 0fr;
        grid-gap: 5px;
        align-items: center;
        margin: 5px 5px;

        .avatar{
            display: flex;
            align-items: center;
            flex-direction: row;
        }
        .user{
            display: flex;
            align-items: center;
            flex-direction: row;
        }
        .textBold{
            font-weight: bold;
        }
        img{
            width: 43px;
            height: 43px;
            border-radius: 50px;
        }
        .name{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
        }
        .user {
            display: flex;
            align-items: center;
            flex-direction: row;  
        }
        .status{
            display: flex;
            align-items: center;
            flex-direction: row;
        }  

        .date{
            display: flex;
            align-items: center;
            flex-direction: row;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;

            background: #0BB7B7;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            width: 33px;
            height: 30px;
            cursor: pointer;

            &:hover{
                opacity: 0.7
            }
        }
    }
`