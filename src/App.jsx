import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePage from './components/ProfilePage'


function App() {

  return (
    <>

      <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
