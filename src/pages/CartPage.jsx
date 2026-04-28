import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, handlePurchase }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const total = cart.length * 100;

  function handlePayNow() {
    setShow(false);
    handlePurchase();
    navigate("/confirmation");
  }

  return (
    <div className="p-4">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((event) => (
            <Card key={event.id} className="mb-3">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>

                <Card.Text>
                  <strong>Date:</strong> {event.date} <br />
                  <strong>City:</strong> {event.city} <br />
                  <strong>Venue:</strong> {event.venue} <br />
                  <strong>Price:</strong> $100
                </Card.Text>
              </Card.Body>
            </Card>
          ))}

          <h2>Total: ${total}</h2>

          <Button onClick={() => setShow(true)}>
            Pay Now
          </Button>
        </>
      )}

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Payment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to pay ${total}? This payment is non-refundable.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handlePayNow}>
            Confirm Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartPage;