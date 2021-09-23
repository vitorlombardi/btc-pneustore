import '../styles/cupom.scss'

export default function Cupom() {
	return (
		<div className='cupom'>
			<form action="">
				<label htmlFor="">Código de desconto</label>
				<div className="field">
					<input type="text" />
					<button>Aplicar</button>
				</div>
			</form>	
		</div>
	)
}
