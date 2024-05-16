import { Alert, Button, Col, InputGroup, InputGroupText, Row } from "reactstrap";

const index = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupText>探す</InputGroupText>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
