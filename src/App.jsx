import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './pages/HomePage.jsx'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import EventPage from './pages/EventPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'
import EventConfirmationPage from './pages/EventConfirmationPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import CartPage from './pages/CartPage.jsx'

function App() {
  const [cart, setCart] = useState([])
  const [purchased, setPurchased] = useState([])

  function addToCart(event) {
    setCart([...cart, event])
  }

  function handlePurchase() {
    setPurchased([...purchased, ...cart])
    setCart([])
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />

          <Route
            path="events"
            element={
              <EventPage
                addToCart={addToCart}
                cart={cart}
                purchased={purchased}
              />
            }
          />

          <Route path="events/:id" element={<EventDetailsPage />} />

          <Route
            path="cart"
            element={
              <CartPage
                cart={cart}
                handlePurchase={handlePurchase}
              />
            }
          />

          <Route path="confirmation" element={<EventConfirmationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App