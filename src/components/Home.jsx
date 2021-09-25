import { Container, Row, Col } from 'reactstrap';
import FormAccount from './FormAccount';
import '../styles/global.scss'
import '../styles/home.scss'
import Order from './Order';
import Cupom from './Cupom';
import ResumoPedido from './resumoPedido';

export default function Home() {
	return (
		<div className="display">
			<Container className='mt-4'>
				<Row>

					<Col md='8'>
						<FormAccount />
					</Col>

					<Col className='infos' md='4'>
						<Order />
						<Cupom />
						<ResumoPedido />
					</Col>

				</Row>
			</Container>
		</div>
	)
}