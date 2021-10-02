import React, { useState } from "react";
import "../../styles/modal.scss";

export default function Modal({ open, setOpen, setEnderecoEscolhido }) {
  const [CriarEnderecos, setCriarEnderecos] = useState(true);
  return (
    <>
      {open ? (
        <div className="Modal">
          <div className="info-Modal">
            <div className="mt-3 d-flex justify-content-center">
              <span className="close" onClick={() => setOpen(false)}>
                <b>X</b>
              </span>
            </div>
            {CriarEnderecos ? (
              <div className='mt-1 enderecos'>
                  <h1 className='d-flex justify-content-center'>Seus endereços</h1>
                  <div className="mt-1 endereco-info">
                      <div className='endereco'>
                        <input type="radio" name='id-endereco'/>
                        <span><b>Endereço: </b>rua da curva reta 16</span>
                        <span><b>Complemento: </b>lado par</span>
                        <span><b>bairro: </b>jardim lugar nenhum</span>
                        <span><b>uf: </b> SP</span>
                        <span><b>CEP: </b>00000-000</span>
                      </div>

                      <div className='endereco'>
                        <input type="radio" name='id-endereco'/>
                        <span><b>Endereço: </b>rua da curva reta 16</span>
                        <span><b>Complemento: </b>lado par</span>
                        <span><b>bairro: </b>jardim lugar nenhum</span>
                        <span><b>uf: </b> SP</span>
                        <span><b>CEP: </b>00000-000</span>
                      </div>

                      <div className='endereco'>
                        <input type="radio" name='id-endereco'/>
                        <span><b>Endereço: </b>rua da curva reta 16</span>
                        <span><b>Complemento: </b>lado par</span>
                        <span><b>bairro: </b>jardim lugar nenhum</span>
                        <span><b>uf: </b> SP</span>
                        <span><b>CEP: </b>00000-000</span>
                      </div>
                  </div>

                  <div className="adicionar-endereco">
                      <span onClick={() =>  setCriarEnderecos(!CriarEnderecos) }>Adicionar um novo endereço</span>
                  </div>

                  <div className='button'>
                      <button  onClick={() => setOpen(!open)}>enviar para este endereço</button>
                  </div>
              </div>
            ) : (
              <div>
                <h1>Parece que você não tem um endereço cadastrado</h1>
                <span>preença os dados abaixo</span>
                <div className="form-endereco">
                  <form>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">logradouro</label>
                      <input name="logradouro" className="mt-1" type="text" required />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">complemento</label>
                      <input name='complemento' className="mt-1" type="text" required />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">bairro</label>
                      <input name='bairro' className="mt-1" type="text" required />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">uf</label>
                      <input name='uf' className="mt-1" type="text" required />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">CEP</label>
                      <input name='cep' className="mt-1" type="text" required />
                    </div>

                    <button 
                    className='mt-3 botao' 
                    type='submit' 
                    onClick={() =>  setCriarEnderecos(!CriarEnderecos) }
                    >
                        Continuar
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
