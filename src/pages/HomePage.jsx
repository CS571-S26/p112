import unitepic from "../assets/unitepic.jpg";
function HomePage() {
  return (
    <div>
      <h1>Welcome to The Mix</h1>
      <p>Where People Unite to Grow</p>
      <img 
        src={unitepic} 
        alt="Business team picture of people uniting" 
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />
    </div>
  );
}

export default HomePage;