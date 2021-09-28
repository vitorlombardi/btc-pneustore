import { useState } from 'react'
import '../../styles/formAccount.scss'
import ProgressBar from './ProgressBar';

export default function FormAccount() {

	const [registrar, setRegistrar] = useState(false);

	return (
		<div className='form-account'>
			<ProgressBar />
		{!registrar ? (
			<form className='col-12 col-lg-8 '>
			<div className=' d-flex flex-column'>
				<h3 className='fw-bold'>Entrar</h3>
				<p>É necessário estar logado para finalizar a compra.</p>

				{/* <Alert color='danger'>Erro ao criar conta</Alert> */}

				<div className='d-flex flex-column mt-1'>
					<label className='label' htmlFor="">Nome de usuário</label>
					<input className='mt-1' type="text" placeholder='Digite seu nome de usuário' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Senha</label>
					<input className='mt-1' type="password" placeholder='Digite sua senha' />
				</div>

				<button className='mt-3 submit' type='submit'>Entrar e continuar</button>
				<p className='mt-3 mx-auto'>Ainda não tem uma conta? <span className='create-account' onClick={e => setRegistrar(true)}>Crie uma conta.</span> </p>

			</div>
		</form>
		) : (
			<form className='col-12 col-lg-8 pb-5'>
			<div className='d-flex flex-column'>
				<h3 className='fw-bold'>Criar conta</h3>
				<p>Crie uma conta para prosseguir com sua compra.</p>

				{/* <Alert color='danger'>Erro ao criar conta</Alert> */}

				<div className='d-flex flex-column mt-1'>
					<label htmlFor="">Nome completo</label>
					<input className='mt-1' type="text" placeholder='Digite seu nome de usuário' />
				</div>

				<div className="d-flex justify-content-between">
					<div className='d-flex flex-column mt-3 w-100 me-2'>
						<label htmlFor="">CPF</label>
						<input className='mt-1' type="text" placeholder='Digite seu cpf' />
					</div>

					<div className='d-flex flex-column mt-3 w-100 ms-2'>
						<label htmlFor="">Data de nascimento</label>
						<input className='mt-1' type="date" placeholder='Digite seu nome de usuário' />
					</div>
				</div>
				
				<div className="d-flex justify-content-between">
					<div className='d-flex flex-column mt-3 w-100 me-2'>
						<label htmlFor="">Email</label>
						<input className='mt-1' type="email" placeholder='O email que você mais usa' />
					</div>

					<div className='d-flex flex-column mt-3 w-100 ms-2'>
						<label htmlFor="">Telefone</label>
						<input className='mt-1' type="text" placeholder='Telefone para contato' />
					</div>
				</div>

				<div className="d-flex">
					<div className='d-flex flex-column mt-3 w-100 me-2'>
						<label htmlFor="">Senha</label>
						<input className='mt-1' type="password" placeholder='Digite sua senha' />
					</div>

					<div className='d-flex flex-column mt-3 w-100 ms-2'>
						<label htmlFor="">Confirmar senha</label>
						<input className='mt-1' type="password" placeholder='Digite sua senha novamente' />
					</div>
				</div>

				<button className='mt-3 submit' type='submit'>Cadastrar e continuar</button>
				<button onClick={e => setRegistrar(false)} className='back'>Voltar</button>

			</div>
		</form>
		)}
		
		</div>
	)
}