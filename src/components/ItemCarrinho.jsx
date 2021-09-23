import '../styles/itemCarrinho.scss'

export default function ItemCarrinho() {
	return (
		<div className='row mt-4 item-cart'>
			<div className="col-4">
				<img src="https://static.pneustore.com.br/medias/sys_master/images/images/he0/h78/8833352564766/pneu-continental-aro-16-contipremiumcontact-205-55r16-91w-run-flat-1.jpg" alt="" />
			</div>
			<div className="col-8">
				<button className='close'>x</button>
				<h4 className='title'>Pneu Continental aro '16  * 205/55R16 91w run flat</h4>
				<button className='add-item'>+</button>
				<span type="number" className='quant-item' disabled >4</span>
				<button className='add-item'>-</button>
			</div>
		</div>
	)
}


