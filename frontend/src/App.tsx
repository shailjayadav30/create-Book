
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Createbook from './pages/Createbook'
import Show from './pages/Show'
import Deletebook from './pages/Deletebook'
import Editbook from './pages/Editbook'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/books/create' element={<Createbook/>}/>   
      <Route path='/books/details/:id' element={<Show/>}/>   
      <Route path='/books/edit/:id' element={<Editbook/>}/>   
      <Route path='/books/delete/:id' element={<Deletebook/>}/>   

     </Routes>
    </>
  )
}

export default App
