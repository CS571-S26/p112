import EventCard from "./EventCard";
import { Row, Col } from "react-bootstrap";
import { events } from "./events";

function EventList() {
  return (
    <Row>
      {events.map((event) => (
        <Col lg={4} md={6} xs={12} key={event.id} className="mb-4">
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
  );
}

export default EventList;