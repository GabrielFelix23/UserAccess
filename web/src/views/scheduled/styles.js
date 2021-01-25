import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 570px;
    margin: 0 13px 20px 0;    
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

    section{
        display: flex;
        flex-direction: column;
    }

    main{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr;
        grid-gap: 5px;
        align-items: center;
        margin: 5px 5px;

        .avatar{
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
        .date{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
`