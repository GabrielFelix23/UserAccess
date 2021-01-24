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
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        font-size: 12px;
        margin: 5px 7px;
        color: #424242;

        .grid {
            display: grid;
            align-items: center;
        }

        .grid-template-columns-1 {
            grid-template-columns: 40px 170px 0 0;
        }

        .grid-template-columns-2 {
            grid-template-columns: 1fr 2fr;
        }

        .grid-template-columns-3 {
            grid-template-columns: minmax(200px, 1fr) 1fr 1fr;
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