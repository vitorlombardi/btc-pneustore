import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/formAccount.scss'
import { Alert } from 'reactstrap';

export default function FormAccount() {

	const [registrar, setRegistrar] = useState(false)

	return (
		<>
		{!registrar ? (
			<form className='col-12 col-lg-8 '>
			<div className=' d-flex flex-column'>
				<h3 className='fw-bold'>Login</h3>
				<p>Entre para finalizar sua compra.</p>

				{/* <Alert color='danger'>Erro ao criar conta</Alert> */}

				<div className='d-flex flex-column mt-1'>
					<label htmlFor="">Nome de usuário</label>
					<input className='mt-1' type="text" placeholder='Digite seu nome de usuário' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Senha</label>
					<input className='mt-1' type="password" placeholder='Digite sua senha' />
				</div>

				<button className='mt-3' type='submit'>Fazer o login</button>
				<p className='mt-3 mx-auto'>Ainda não tem uma conta? <a onClick={e => setRegistrar(true)}>Crie uma conta.</a> </p>

			</div>
		</form>
		) : (
			<form className='col-12 col-lg-6'>
			<div className='d-flex flex-column'>
				<h3 className='fw-bold'>Criar conta</h3>
				<p>Crie uma conta para prosseguir com sua compra.</p>

				{/* <Alert color='danger'>Erro ao criar conta</Alert> */}

				<div className='d-flex flex-column mt-1'>
					<label htmlFor="">Nome completo</label>
					<input className='mt-1' type="text" placeholder='Digite seu nome de usuário' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">CPF</label>
					<input className='mt-1' type="text" placeholder='Digite seu cpf' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Email</label>
					<input className='mt-1' type="email" placeholder='O email que você mais usa' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Telefone</label>
					<input className='mt-1' type="text" placeholder='Telefone para contato' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Data de nascimento</label>
					<input className='mt-1' type="date" placeholder='Digite seu nome de usuário' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Senha</label>
					<input className='mt-1' type="password" placeholder='Digite sua senha' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Confirmar senha</label>
					<input className='mt-1' type="password" placeholder='Digite sua senha novamente' />
				</div>

				<button className='mt-3' type='submit'>Cadastrar e continuar</button>
				<p className='mt-3 mx-auto'>Ainda não tem uma conta? <Link  onClick={e => setRegistrar(true)}>Crie uma conta.</Link> </p>

			</div>
		</form>
		)}
		
		</>
	)
}