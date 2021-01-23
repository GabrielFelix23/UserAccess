import React from 'react'
import * as S from './styles'

import Logo from '../../util/logo.png'

function Menu() {
  return (
    <S.Container>
        <S.Menu>
            <S.Header>
                <S.Logo>
                    <img src={Logo} alt="Logo"/>
                    <h1>Logo</h1>
                </S.Logo>
                <span>Empresa A - Sala 210</span>
                <span>João Alves</span>
            </S.Header>

            <S.Nav>
                <span className="activated">Home</span>
                <span>Agendamentos</span>
                <span>Cadastro</span>
                <span>Report</span>
                <span>Sair</span>
            </S.Nav>
        </S.Menu>
    </S.Container>
  )
}

export default Menu