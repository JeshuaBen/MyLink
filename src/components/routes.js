import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Link from '../pages/Links/Links'

export function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Links" element={<Link />}/>
      </Routes>
    </BrowserRouter>
  )
}

