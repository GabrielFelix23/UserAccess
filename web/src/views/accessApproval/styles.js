import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 650px;
    
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
            max-width: 580px;
        }
    }

    main{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        font-size: 12px;
        margin: 10px 20px;
        color: #424242;

        .grid{
            display: grid;
            align-items: center;
        }
        .grid-template-columns-1 {
            grid-template-columns: 100px 100px 100px;
            grid-template-columns: 0fr 5fr;
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
            width: 40px;
            height: 40px;
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
                margin-right: 3px;
                font-size: 18px;
                color: #424242
            }
        }

        .date{
            display: flex;
            align-items: center;
            flex-direction: row;

            svg{
                margin-right: 3px;
                font-size: 18px;
                color: #424242
            }
        }

        button{
            background: #0BB7B7;
            border: none;
            border-radius: 10px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            width: auto;
            height: auto;
            padding: 8px;
            cursor: pointer;

            &:hover{
                opacity: 0.7
            }
        }
    }
`