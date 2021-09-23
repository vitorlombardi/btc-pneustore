import { Container, Row, Col } from 'reactstrap';
import FormAccount from './FormAccount';
import '../styles/global.scss'
import '../styles/home.scss'

export default function Home() {
	return (
		<div className="display">
			<Container className='mt-4'>
				<Row>
					<Col md='8'>
						<FormAccount />
					</Col>
					<Col md='4'>
						<div>Olá</div>
						<div>Olá</div>
						<div>Olá</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}