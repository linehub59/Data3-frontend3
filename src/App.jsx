import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Splash from './pages/Splash'
//import Auth from './pages/Auth'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App