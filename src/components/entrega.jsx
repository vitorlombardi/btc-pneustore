import "../styles/entrega.scss";
import { useState } from "react";
import ProgressBar from "./FormAccount/ProgressBar";
import React from "react";
import Modal from "./modal/modal";

export default function Entrega() {
  const [CEP, setCEP] = useState(false);

  const [openModaCasa, setOpenModaCasa] = useState(false);

  const [enderecoEscolhido, setEnderecoEscolhido]= useState(undefined);
  

  return (
    <div>
      <ProgressBar />
      <form className="col-12 col-lg-8 ">
        <div className="d-flex flex-column escolha-itens">
          <h3 className="fw-bold">Escolha uma opção de entrega </h3>

          <div className=" d-flex flex-column mt-5">
            <label>Informe o seu CEP</label>
            <div className="d-flex flex-row input">
              <input
                type="number"
                name="CEP"
                placeholder="Insira seu CEP"
                required
              />
              <button
                type="submit"
                className="button-cep"
                onClick={(e) => setCEP(true)}
              >
                Calcular entrega
              </button>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            {/* <div classNameName="escolha-entrega-casa">
                        
                        <div className="d-flex flex-row">
                            <div classNameName="mt-1">
                                    <p>Entregar no meu endereço</p>
                                </div>
                            <div classNameName="d-flex mt-1">
                                <input classNameName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </div>
                        </div>
                        <div classNameName=" d-flex info">
                            <p>Norma</p>
                            <p>De 4 a 7 dias úteis</p>
                            <span>R$34,90</span>
                        </div>
                        
                    </div> */}

            {CEP ? (
              <div>
                <h3 className="fw-bold mt-5">Tipos de entrega disponiveis</h3>

                <div
                  className="card mt-3 card-entrega"
                  onClick={() => setOpenModaCasa(true)}
                >
                  <h5 className="card-header">Montagem Móvel</h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Agende sua entrega com a PneuStore Móvel
                    </h5>
                    {enderecoEscolhido?<div>bao</div> : <p className="card-text">Confira opções</p>} 
                  </div>
                  
                </div>

                <Modal 
                open={openModaCasa} 
                setOpen={setOpenModaCasa}
                setEnderecoEscolhido={setEnderecoEscolhido}
                />

                <div className="card mt-3 card-entrega">
                  <h5 className="card-header">
                    Entregar e montar em um Centro de Montagem
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Confira a disponibilidade dos serviços em cada centro de
                      montagem
                    </h5>
                    <div className="d-flex flex-row qz-between">
                      <p className="card-text">De 4 a 7 dias úteis</p>
                      <p className="card-text">R$34,90</p>
                    </div>
                  </div>
                </div>

                <div className="card mt-3 card-entrega">
                  <h5 className="card-header">Entregar no meu endereço</h5>
                  <div className="card-body">
                    <h5 className="card-title">Norma</h5>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="card-text">De 4 a 7 dias úteis</p>
                      <p className="card-text">R$34,90</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 mb-3 d-flex justify-content-center">
                  <button type="submit" className="button-cep">
                    Continuar
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
