import React, {useState, useEffect} from 'react'
import * as S from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsStopwatch } from 'react-icons/bs'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { TiArrowShuffle } from 'react-icons/ti'
import { RiCheckboxBlankFill } from 'react-icons/ri'

import api from '../../services/api_accessApproval'

function Modal({onClose = () => {}}){
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
    
    return(
        <S.Container onClick={onClose}>
            <S.Modal>
                <S.ModalHeader>
                    <span>Aprovação de acesso</span>
                    <button onClick={onClose}><AiOutlineClose/></button>
                </S.ModalHeader>

                <S.ModalProfile>
                    {
                        list.map((l) => {
                            return(
                                l.id == 11 && 
                                <section>
                                    <img src={l.avatar} alt="Avatar"/>
                                    <div className="name">
                                        <span className="textBold">{l.name}</span>
                                        <span>{l.type_user}</span>
                                    </div>
                                </section> 
                            )
                        })
                    }
                </S.ModalProfile>

                <S.ModalBody>
                    <label>Destino</label>
                    <input type="text" value="QUALITY / SAGRIS SALA 107"/>

                    <div className="containerInput">
                        <div className="separator">
                            <label>Hora e data</label>
                            <input className="medium" type="text" value="14:27 - 06/01/2021"/>
                        </div>
                        <div className="separator">
                            <label>Acompanhantes</label>                    
                            <input className="litte" type="text" value="04"/>
                            <FiUsers color="#424242"/>
                        </div>
                    </div>

                    <div className="containerInput">
                        <div className="separator">
                            <label>Procedimento</label>
                            <input className="medium space" type="text" value="Entrada-Saída"/>
                            <RiArrowUpDownLine color="#0bb7b7"/>
                        </div>
                        
                        <div className="separator">
                            <label>Permanência limite</label>                    
                            <input className="litte" type="text" value="08:00h"/>
                            <BsStopwatch color="#424242"/>
                        </div> 
                    </div>

                    <div className="containerInput">
                        <div className="separatorRef">
                            <label>Referência</label>
                            <input className="inputDark" type="text" value="9519849162154"/>
                            <TiArrowShuffle color="#0bb7b7"/>
                        </div>
                    </div>

                    <div className="containerInput">
                        <div className="separator">
                            <label>CPF</label>
                            <input className="medium inputDark" type="text" value="431.451.185-12"/>
                        </div>
                        
                        <div className="separator">
                            <label>Telefone</label>                    
                            <input className="medium inputDark" type="text" value="(11) 91244-1245"/>
                        </div> 
                    </div>
                    <div className="containerInput">
                        <div className="separator">
                            <label>Veículo</label>
                            <input className="medium inputDark" type="text" value="Carro"/>
                        </div>
                        
                        <div className="separator">
                            <label>Modelo</label>                    
                            <input className="medium inputDark" type="text" value="HB-20"/>
                        </div> 
                    </div>
                    <div className="containerInput">
                        <div className="separatorRef">
                            <label>Cor</label>
                            <input className="medium inputDark" type="text" value="Preto"/>
                            <RiCheckboxBlankFill color="#000"/>
                        </div>
                        
                        <div className="separator">
                            <label>Placa</label>                    
                            <input className="medium inputDark" type="text" value="AAAA-2000"/>
                        </div> 
                    </div>

                    <div className="containerButton">
                        <button className="redButton">NEGAR ACESSO</button>
                        <button className="blueButton">APROVAR ACESSO</button>
                    </div>
                    

                </S.ModalBody>
            </S.Modal>
        </S.Container>
    )
}

export default Modal