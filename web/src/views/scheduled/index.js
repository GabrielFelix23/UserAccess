import React, {useState, useEffect} from 'react'
import * as S from './styles'

import api from '../../services/api_scheduled'
import HeaderScheduled from '../../components/header/scheduled'

function Scheduled() {
    const [list, setList] = useState([])

    async function loadList(){
        await api.get('')
        .then((response) => {
            setList(response.data.data.scheduled)
        })
    }

    useEffect(() => {
        loadList()
    }, [])

    return (
        <S.Container>
            <HeaderScheduled/>  
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
                                <div className="date">
                                    <span>Data hora:</span>
                                    <span>{l.dh_access}</span>
                                </div>

                                <div className="avatar">
                                    <img src={l.avatar} alt="Avatar"/>
                                    <div className="name">
                                        <span className="textBold">{l.name}</span>
                                        <span>{l.type_user}</span>
                                    </div>
                                </div>    
                                <div className="date">
                                    <span>Data hora:</span>
                                    <span>{l.dh_access}</span>
                                </div>   
                            </main>
                        </section>
                    )  
                }) 
            }   
            </S.Body> 
        </S.Container>
    )
}

export default Scheduled