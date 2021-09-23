import { Container, Row, Col } from 'reactstrap';
import FormAccount from './FormAccount';

export default function Home() {
	return (
		<Container>
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
	)
}