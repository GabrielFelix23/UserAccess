import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { ImLocation} from 'react-icons/im';
import { BsStopwatch } from 'react-icons/bs';

import api from '../../services/api_accessApproval'
import HeaderAccessApproval from '../../components/header/accessApproval'
import Modal from '../../components/Modal'

function AccessApproval() {
    const [list, setList] = useState([])
    const [isModalVisibol, setIsModalVisibol] = useState(false)

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
                                <div className="avatar">
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
                                <div className="date">
                                    <BsStopwatch/>
                                    <span>{l.dh_access}</span>
                                </div>
                                {l.type_user == "VISITANTE" ?
                                    <button onClick={() => setIsModalVisibol(true)}>APROVAR</button>
                                    :
                                    <button onClick={() => setIsModalVisibol(true)}>DECIDIR</button>
                                }
                            </main>
                            <div className="separator"/>
                        </section>
                    )  
                }) 
            }   
        </S.Body> 
            {
                isModalVisibol ? 
                <Modal onClose={() => setIsModalVisibol(false)}>
                 
                </Modal> : null
            }
        </S.Container>
    )
}

export default AccessApproval