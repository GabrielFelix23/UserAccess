import React from 'react'
import * as S from './styles'
import { AiOutlineClose } from 'react-icons/ai';

function Modal({onClose = () => {}, children}){
    return(
        <S.Container onClick={onClose}>
            <S.Modal>
                <button onClick={onClose}><AiOutlineClose/></button>
                <S.Content>
                    {children}
                </S.Content>
            </S.Modal>
        </S.Container>
    )
}

export default Modal