import Link from "next/link";
import { Badge, Button, Card, CardBody, CardTitle } from "reactstrap";

const Cart = () => {
  return (
    <div>
      <Card style={{ padding: "10px 5px" }}>
        <CardTitle
          style={{
            margin: 10,
            textAlign: "center",
            fontWeight: 600,
            fontSize: 25,
          }}
        >
          注文一覧
        </CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>料理：</small>
          </div>
          <div>
            <div className="items-one" style={{ marginBottom: 15 }}>
              <div>
                <span id="item-price">&nbsp; 200円</span>
                <span id="item-name">&nbsp; サラダ</span>
              </div>
              <div>
                <Button style={{ height: 25, padding: 0, width: 15, marginRight: 5, marginLeft: 10, }}>+</Button>
                <Button>-</Button>
                <span id="item-quantity">1つ</span>
              </div>
            </div>
            <div>
              <Badge>
                <h5>合計：</h5>
                <h3>1200円</h3>
              </Badge>
              <div>
                <Link href="/checkout">
                  <Button>
                    <a>注文する</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cart;
