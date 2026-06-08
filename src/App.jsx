import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingContent from './pages/LandingContent'
import LandingEmotional from './pages/LandingEmotional'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/demo' element={<LandingContent />} />
        <Route path='/' element={<LandingEmotional />} />
        <Route path={"*"} element={<LandingEmotional />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
