import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Link from '../../pages/Links/Links'
import Error from '../../pages/Error/Error'

export function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Links" element={<Link />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

