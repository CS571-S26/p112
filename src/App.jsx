import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import EventPage from './pages/EventPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'
import EventConfirmationPage from './pages/EventConfirmationPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="events" element={<EventPage />} />
        <Route path="events/:id" element={<EventDetailsPage />} />
        <Route path="confirmation" element={<EventConfirmationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
