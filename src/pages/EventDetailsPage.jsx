import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { events } from "../components/events";

function EventDetailsPage() {
  const { id } = useParams();

  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div className="p-4">
      <Card>
        <Card.Body>
          <h1>{event.title}</h1>

          <Card.Text>
            <strong>Date:</strong> {event.date} <br />
            <strong>Time:</strong> {event.time} <br />
            <strong>City:</strong> {event.city} <br />
            <strong>Venue:</strong> {event.venue} <br />
            <strong>Dress Code:</strong> {event.dressCode} <br />
            <strong>Parking:</strong> {event.parking} <br />
            <strong>Dinner:</strong> {event.dinner}
          </Card.Text>

          <p>{event.description}</p>

          <Button as={Link} to="/events">
            Back to Events
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventDetailsPage;