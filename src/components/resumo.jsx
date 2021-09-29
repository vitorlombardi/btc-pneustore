import '../styles/resumo.scss'

export default function Resumo(){
    return(
        <div className='resumo'>
            <h3 className='fw-bold'>Resumo da compra</h3>
            <ul class="list-group mt-5">
                <li class="list-group-item d-flex justify-content-center"><b>dados da compra</b></li>
                <li class="list-group-item">
                    <span><b>produtos comprados:</b></span>
                    <div className='d-flex flex-row '>
                        <span>Pneu Continental aro '16  * 205/55R16 91w run flat</span>
                        <span>x</span>
                        <span>R$350,00</span>
                    </div>
                </li>
                <li class="list-group-item">
                    <span><b>serviços adicionais</b></span>
                    <div className='d-flex flex-column'>
                        <span>Instalação em domicílio:</span>
                        <span>
                            Combo Básico 1 ou 2 Pneus 
                            (Aro 12 - 16) no dia 30/09 com preferência 
                            para o período da tarde.
                        </span>
                    </div>
                </li>
                <li class="list-group-item">
                    <span><b>Entraga no meu endereço</b></span>
                    <div class="d-flex flex-column">
                        <span>Estrada Joaquim Cardoso Filho 3250</span>
                        <span>Jardim São Marcos</span>
                        <span>Itapecerica da Serra - SP</span>
                        <span>CEP: 06872200</span>
                    </div>
                </li>
                <li class="list-group-item">
                    <span><b>detales do pagamento</b></span>
                    <div class="d-flex flex-column">
                        <span>(Crédito) Visa ****9999</span>
                        <span>Nome: Jorginho Silva</span>
                        <span>vencimento:xx/xxxx</span>
                    </div>
                    
                </li>
                <li class="list-group-item">
                    <span><b>Valor total:</b></span>
                    <span>R$1.103,90</span>
                </li>
            </ul>

            <button className="mt-5">Confirmar compra</button>
        </div>
    )
}




