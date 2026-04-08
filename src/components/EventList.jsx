import EventCard from "./EventCard";
import {Row, Col} from "react-bootstrap";

const events = [
  {
    id: 1,
    title: "Chicago Mixer",
    date: "May 15, 2026",
    city: "Chicago",
    venue: "The St. Regis Chicago",
  },
  {
    id: 2,
    title: "Los Angeles Mixer",
    date: "June 15, 2026",
    city: "Los Angeles",
    venue: "JW Marriott Los Angeles L.A. LIVE",
  },
];

function EventList() {
  return (
    <Row>
      {events.map((event) => (
        <Col lg={4} md={6} xs={12} key={event.id}>
          <EventCard event={event}/>
        </Col>
      ))}
    </Row>
  );
}

export default EventList;