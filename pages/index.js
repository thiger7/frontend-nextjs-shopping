import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import RestaurantList from "../components/RestaurantsList";
import { useState } from "react";

const index = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupText>探す</InputGroupText>
              <Input
                onChange={e => setQuery(e.target.value.toLocaleLowerCase())}
                placeholder="レストラン名を入力してください"
              />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </Col>
      </Row>
      <style jsx>{`
        .search {
          margin: 20px;
          width: 500px;
        }
      `}</style>
    </div>
  );
};

export default index;
