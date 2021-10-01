import React from 'react'
import '../styles/formPagamento.scss'

export default function FormPagamento() {
    return(
        <div className='form-pagamento'>
			<form className='col-12 col-lg-8 '>
                <div className=' d-flex flex-column'>
                    <h3 className='fw-bold'>detales do pagamento</h3>
                    <div className='d-flex flex-column mt-3'>
                        <label htmlFor="">nome do titular</label>
                        <input className='mt-1' type="text" required/>
                    </div>

                    <div className='d-flex flex-column mt-3' maxLength='16' required>
                        <label htmlFor="">número do cartão</label>
                        <input className='mt-1' type="number" required
                         />
                    </div>
                    <div className=' d-flex flex-row mt-3'>
                        <div className='d-flex flex-column mt-3'>
                            <label htmlFor="">Vencimento</label>
                            <input className='mt-1' type="number" placeholder='MM/AA'  maxLength='4' required/>
                        </div>

                        <div className='d-flex flex-column mt-3 CVV'>
                            <label htmlFor="">CVV</label>
                            <input className='mt-1 '  type="number" maxLength='3'  minlength="3" required/>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <b>Clique aqui</b> para opções de parcelamento
                    </div>
                    <button className='mt-3 botao' type='submit'>Continuar</button>
                </div>
		    </form>
        </div>
    )
}