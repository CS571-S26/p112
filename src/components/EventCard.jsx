import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap";


function EventCard({event}) {


  return (
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
        <Button as={Link} to="/confirmation" >
            Reserve
          </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;