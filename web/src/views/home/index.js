import React from 'react'
import * as S from './styles'

import Menu from '../../components/menu'
import AccessApproval from '../accessApproval'
import LastAccess from '../scheduled'
import Scheduled from '../scheduled'

function Home() {
  return (
    <S.Container>
      <Menu/>

      <S.ContainerAccessApproval>
        <AccessApproval/>
        <LastAccess/>
        <Scheduled/>
      </S.ContainerAccessApproval>
    </S.Container>
  )
}

export default Home