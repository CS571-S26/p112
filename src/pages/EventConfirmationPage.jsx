import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function EventConfirmationPage() {
  return (
    <div className="p-4 text-center">
      <h1>Your Reservation is Confirmed!</h1>
      <p>Your payment went through successfully.</p>

      <Button as={Link} to="/" className="mt-3">
        Back to Home
      </Button>
    </div>
  );
}

export default EventConfirmationPage;