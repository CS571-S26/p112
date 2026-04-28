import { Link } from "react-router-dom";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function EventCard({ event, addToCart }) {
  const [show, setShow] = useState(false);

  function handleConfirm() {
    addToCart(event);
    setShow(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>

          <Card.Text>
            Date: {event.date} <br />
            City: {event.city} <br />
            Venue: {event.venue}
          </Card.Text>

          <Button as={Link} to={`/events/${event.id}`} className="me-2">
            View More Details
          </Button>

          <Button onClick={() => setShow(true)}>
            Reserve
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to reserve this event? This reservation is non-refundable.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleConfirm}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventCard;