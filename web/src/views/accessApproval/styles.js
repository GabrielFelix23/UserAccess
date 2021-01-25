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

        .separator{
            margin: 0 auto;
            border: 1px solid #E1E1E1;
            width: 100%;
            max-width: 490px;
        }
    }

    main{
        display: grid;
        grid-template-columns: 10fr 5fr 8fr 0fr;
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
        .room {
            display: flex;
            align-items: center;
            flex-direction: row;
            

            svg{
                margin-right: 2px;
                font-size: 15px;
                color: #424242
            }
        }

        .date{
            display: flex;
            align-items: center;
            flex-direction: row;

            svg{
                margin-right: 2px;
                font-size: 15px;
                color: #424242
            }
        }

        button{
            background: #0BB7B7;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-size: 10px;
            font-weight: bold;
            width: 70px;
            height: 25px;
            cursor: pointer;

            &:hover{
                opacity: 0.7
            }
        }
    }
`