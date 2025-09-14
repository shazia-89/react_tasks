import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to My React App</h1>
        <Profile name="Shazia Azimi" bio="Future Developer" avatar="https://via.placeholder.com/150" />
      </main>
      <Footer />
    </div>
  )
}

export default App
