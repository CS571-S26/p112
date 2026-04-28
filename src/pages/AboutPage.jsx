import '../App.css'
import { Card } from 'react-bootstrap'
import parthpatelwebproject from '../assets/parthpatelwebproject.jpg'

export default function AboutPage() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h1>About Us</h1> 
          <p>We created this platform to bring professionals together in a world where remote work has made meaningful connections harder to build. Our goal is to create curated networking mixers across cities, giving individuals the opportunity to meet, learn, and grow alongside others in their fields. By combining events with easy scheduling and booking, we make it simple to turn introductions into lasting professional relationships.</p>
          <h2>Meet The Founder</h2> 
          <img 
  src={parthpatelwebproject} 
  alt="Founder Parth Patel" 
  className="img-fluid rounded mt-3"
  style={{ maxWidth: "500px" }}
/>
          <p>Hello everyone, my name is Parth Patel. I am a current sophomre in the University of Wisconsin-Madison studying Computer Science. </p>
        </Card.Body>
      </Card>
    </div>
  )
}
