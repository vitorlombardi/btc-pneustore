import { Container, Row, Col } from 'reactstrap';
import '../styles/global.scss'
import '../styles/home.scss'
import Order from './Order';
import Cupom from './Cupom';
import ResumoPedido from './resumoPedido';
import FormPagamento from './formPagamento'
import Entrega from './entrega'
import Header from "./Header";
import FormAccount from "./FormAccount/FormAccount";



export default function Home() {
	return (
		<>
      <Row>
        <Header />
      </Row>
      <div className="display">
        <Container className="mt-4">
          <Row>
            <Col md="8">
              {/* <FormAccount /> */}
			        {/* <FormPagamento/> */}
			        {/* <Entrega />  */}
              
            </Col>

            <Col className="infos" md="4">
              <Order />
              <Cupom />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}