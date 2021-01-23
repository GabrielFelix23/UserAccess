import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { ImLocation} from 'react-icons/im';
import { BsStopwatch } from 'react-icons/bs';

import api from '../../services/api'
import HeaderAccessApproval from '../../components/header/accessApproval'

function AccessApproval() {
    const [list, setList] = useState([])

    async function loadList(){
        await api.get('')
        .then((response) => {
          setList(response.data.data.access_approval)
        })
    }

    useEffect(() => {
        loadList()
      }, [])

    return (
        <S.Container>
            <HeaderAccessApproval/>  
            <S.Body>
            {
                list.map((l) => {
                    return(
                        <section key={l.id}>
                            <main>
                                <div className="grid grid-template-columns-1">
                                    <img src={l.avatar} alt="Avatar"/>
                                    <div className="name">
                                        <span className="textBold">{l.name}</span>
                                        <span>{l.type_user}</span>
                                    </div>
                                </div>
                                <div className="room">
                                    <ImLocation/>
                                    <span>Sala {l.room}</span>
                                </div>
                                <div className="grid .grid-template-columns-3 date">
                                    <BsStopwatch/>
                                    <span>{l.dh_access}</span>
                                </div>
                                <button>Aprovar</button>
                            </main>
                            <div className="separator"/>
                        </section>
                    )  
                }) 
            }
                
            </S.Body> 
        </S.Container>
    )
}

export default AccessApproval