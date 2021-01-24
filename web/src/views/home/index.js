import React from 'react'
import * as S from './styles'

import Menu from '../../components/menu'
import AccessApproval from '../accessApproval'
import AccessIndicator from '../accessIndicator'

function Home() {
  return (
    <S.Container>
      <Menu/>

      <S.ContainerAccessApproval>
        <AccessApproval/>
        <AccessIndicator/>
      </S.ContainerAccessApproval>
    </S.Container>
  )
}

export default Home