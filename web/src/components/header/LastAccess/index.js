import React from 'react'
import * as S from './styles'

function HeaderLastAccess() {
  return (
    <S.Container>
      <span>Últimos acessos</span>
      <div className="stateList">
        <span>Ver tudo</span>
        <span>Total: 110</span>
      </div>
    </S.Container>
  )
}

export default HeaderLastAccess