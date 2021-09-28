import '../styles/entrega.scss'
import { useState } from 'react'
import ProgressBar from './FormAccount/ProgressBar';

export default function Entrega(){
    const[CEP, setCEP] = useState(false)
    return(
        <div>
            <ProgressBar/>
            <form className='col-12 col-lg-8 '>
            <div className=' d-flex flex-column escolha-itens'>
				<h3 className='fw-bold'>Escolha uma opção de entrega </h3>
                {!CEP ? (
                    <div className=' d-flex flex-column mt-5'>
                        <label>Informe o seu CEP</label>
                        <div className='d-flex flex-row'>
                            <input type="text" name="cupom" placeholder="Insira seu CEP" required />
                            <button type='submit' className='ml-1' onClick={e => setCEP(true)}>Calcular entrega</button>
                        </div>
                    </div>
                    
                ) : (

                <div class="w-full flex justify-between items-center"> 
                    {/* <div className="escolha-entrega-casa">
                        
                        <div class="d-flex flex-row">
                            <div className="mt-1">
                                    <p>Entregar no meu endereço</p>
                                </div>
                            <div className="d-flex mt-1">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </div>
                        </div>
                        <div className=" d-flex info">
                            <p>Norma</p>
                            <p>De 4 a 7 dias úteis</p>
                            <span>R$34,90</span>
                        </div>
                        
                    </div> */}

                    <div class="card mt-3 card-entrega">
                        <h5 class="card-header">Montagem Móvel</h5>
                        <div class="card-body">
                            <h5 class="card-title">Agende sua entrega com a PneuStore Móvel</h5>
                            <p class="card-text">Confira opções</p>
                        </div>
                    </div>

                    <div class="card mt-3 card-entrega">
                        <h5 class="card-header">Entregar e montar em um Centro de Montagem</h5>
                        <div class="card-body">
                            <h5 class="card-title">Confira a disponibilidade dos serviços em cada centro de montagem</h5>
                            <div class="d-flex flex-row justify-content-between">
                                <p class="card-text">De 4 a 7 dias úteis</p>
                                <p class="card-text">R$34,90</p>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3 card-entrega">
                        <h5 class="card-header">Entregar no meu endereço</h5>
                        <div class="card-body">
                            <h5 class="card-title">Norma</h5>
                            <div class="d-flex flex-row justify-content-between">
                                <p class="card-text">De 4 a 7 dias úteis</p>
                                <p class="card-text">R$34,90</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-5 d-flex justify-content-center">
                        <button type='submit' className='botao'>Continuar</button>
                    </div>
                   
                </div>
            )}
            </div>
            </form>
		

        </div>
    )
}