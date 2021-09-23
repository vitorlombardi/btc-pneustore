import { Form, Col, Row, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';


export default function FormAccount() {

	return (
		<form>
			<div className='d-flex flex-column w-50 m-auto'>
					<Form>
						<div className='d-flex flex-column mt-2'>
							<label htmlFor="">Nome de usuário</label>
							<input type="text" placeholder='Digite seu nome de usuário' />
						</div>
						<div className='d-flex flex-column mt-2'>
							<label htmlFor="">Senha</label>
							<input type="text" placeholder='Digite sua senha' />
						</div>
						<button className='mt-3' type='submit'>Fazer o login</button>
					</Form>
					<p className='mt-2'>Ainda não tem uma conta? <a href=''>Crie uma conta.</a> </p>
			</div>
		</form>
	)
}