import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Splash from './pages/Splash'
import Auth from './pages/Auth'
import Bundles from './pages/Bundles'

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/bundles" element={<Bundles />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App