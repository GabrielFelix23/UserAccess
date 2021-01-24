import React from 'react'
import * as S from './styles'

import Menu from '../../components/menu'
import AccessApproval from '../accessApproval'

function Home() {
  return (
    <S.Container>
      <S.Menu>
        <Menu/>
      </S.Menu>

      <S.AccessApproval>
        <AccessApproval/>
        
      </S.AccessApproval>
    </S.Container>
  )
}

export default Home