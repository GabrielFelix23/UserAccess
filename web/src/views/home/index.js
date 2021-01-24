import React from 'react'
import * as S from './styles'

import Menu from '../../components/menu'
import AccessApproval from '../accessApproval'
import LastAccess from '../LastAccess'

function Home() {
  return (
    <S.Container>
      <Menu/>

      <S.ContainerAccessApproval>
        <AccessApproval/>
        <LastAccess/>
      </S.ContainerAccessApproval>
    </S.Container>
  )
}

export default Home