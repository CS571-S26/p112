import EventList from "../components/EventList";


function EventPage({ addToCart, cart, purchased }) {
  return (
    <div>
      <h1>Events</h1>
      

      <EventList 
  addToCart={addToCart} 
  cart={cart} 
  purchased={purchased} 
/>
    </div>
  );
}

export default EventPage;