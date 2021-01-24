import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10px;
    background-color: rgba(0,0,0,0.4);
` 

export const Modal = styled.div`
    background-color: #EEEEEE;
    color: #434343;
    width: 30%;
    height: auto;
    border-radius: 5px;  

    button{
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        position: relative;
        align-items: center;

        svg{
            font-size: 15px
        }
    }
`
export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 0 0 10px;

    span{
        font-size: 15px;
    }
`

export const ModalProfile = styled.div`
        display: flex;
        flex-direction: column;
        margin: 20px 15px 0 15px;
        
        section{
            display: flex;
            align-items: center;
            flex-direction: row;
            width: 100%;
            max-width: 300px;
        
            img{
                width: 60px;
                height: 60px;
                border-radius: 50px;
            }

            .textBold{
                font-weight: bold;
            }

            .name{
                display: flex;
                flex-direction: column;
                margin-left: 10px;

                span{
                    font-size: 15px
                }
            }
        }
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 20px;
    font-size: 13px;

    input{
        display: flex;
        align-items: center;

        width: 100%;
        max-width: 350px;
        height: 30px;
        background: #fff;
        border: 1px solid #0BB7B7;
        border-radius: 5px;
        font-size: 13px;
        color: #434343;
        font-weight: bold;
        padding-left: 10px;
        margin-top: 7px;
        margin-bottom: 12px;
    }

    .inputDark{  
        border: none;
        max-width: 170px;
        background: #CFCFCF;
    }

    .containerInput{
        display: flex;
        flex-direction: row;

        .separator{
            margin-right: 20px;
            svg{
                position: absolute; 
                margin: -40px 0 0 10px;
                font-size: 20px
            }
        }
        .separatorRef{
            margin-right: 20px;
            svg{
                position: absolute; 
                margin: -40px 0 0 10.5%;
                font-size: 24px
            }
        }
        .medium{
            max-width: 170px;
        }

        .space{
            padding-left: 35px;
            max-width: 145px;
            margin-right: -5px;
        }

        .litte{
            max-width: 70px;
            padding-left: 35px
        }
    }

    .containerButton{
        display: flex;
        flex-direction: row;

        button{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 35px;
            max-width: 200px;
            margin-right: 10px;
            font-weight: bold;
        }
        .redButton{
            background: #B70B0B;
            color: #fff;
            border-radius: 5px;
        }
        .redButton:hover{
            opacity: 0.7
        }
        .blueButton{
            background: #0BB7B7;
            color: #fff;
            border-radius: 5px;
        }
        .blueButton:hover{
            opacity: 0.7
        }
    }
`