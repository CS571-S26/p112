import { Link, useNavigate} from "react-router-dom";
import {Card, Button, Modal} from "react-bootstrap";
import { useState } from "react";


function EventCard({event}) {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleConfirm() {
    setShow(false);
    navigate("/confirmation");
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

        <Button as={Link} to={`/events/${event.id}`}>
          View More Details
        </Button>
        <Button onClick={() => setShow(true)}>
            Reserve
          </Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reservation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to reserve this event? This payment is non-refundable.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EventCard;