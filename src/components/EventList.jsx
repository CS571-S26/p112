import EventCard from "./EventCard";
import { Row, Col } from "react-bootstrap";
import { events } from "./events";

function EventList({ addToCart, cart, purchased }) {
  const availableEvents = events.filter(
    (event) =>
      !cart.some((item) => item.id === event.id) &&
      !purchased.some((item) => item.id === event.id)
  );

  if (availableEvents.length === 0) {
  return <h4 className="p-4 text-center">There are no more events</h4>;
  }

  return (
    <Row>
      {availableEvents.map((event) => (
        <Col lg={4} md={6} xs={12} key={event.id}>
          <EventCard event={event} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  );
}

export default EventList;