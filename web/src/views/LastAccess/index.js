import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { BsStopwatch } from 'react-icons/bs'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { BsFillEyeFill } from 'react-icons/bs'

import api from '../../services/api_LastAccess'
import HeaderLastAccess from '../../components/header/LastAccess'

function LastAccess() {
    const [list, setList] = useState([])

    async function loadList(){
        await api.get('')
        .then((response) => {
            setList(response.data.data.last_access)
        })
    }

    useEffect(() => {
        loadList()
    }, [])

    return (
        <S.Container>
            <HeaderLastAccess/>  
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
                                        <span>{l.approved_by}</span>
                                    </div>
                                </div>
                                
                                <div className="user">
                                    <FiUsers color="#424242"/>
                                    <span>3</span>
                                </div>

                                <div className="status">
                                    <RiArrowUpDownLine color="#0bb7b7"/>
                                    <span>{l.status}</span>
                                </div>
                               
                                <div className="date">
                                    <BsStopwatch color="#424242"/>
                                    <span>{l.dh_access}</span>
                                </div>
                                
                                <button><BsFillEyeFill color="#fff"/></button>
                                
                            </main>
                        </section>
                    )  
                }) 
            }   
            </S.Body> 
        </S.Container>
    )
}

export default LastAccess