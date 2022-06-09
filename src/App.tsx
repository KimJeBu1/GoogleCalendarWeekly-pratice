import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calendar from './pages/Calendar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes>
          <Route path="/" element={<Calendar />} />
        </Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
