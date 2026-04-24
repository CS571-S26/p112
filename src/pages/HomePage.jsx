import unitepic from "../assets/unitepic.jpg";
function HomePage() {
  return (
    <div>
      <h2>Welcome to The Mix</h2>
      <p>Where People Unite to Grow</p>
      <img 
        src={unitepic} 
        alt="Business team" 
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