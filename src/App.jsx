import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthContext } from './context/AuthContext'
import { Home, NavBar, NotFound, Footer, SendPackage, Invoice, Detail } from './utils/import'

const App = () => {
  return <>
  <NavBar />
    <AuthContext>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/detalle' element={<Detail />} />
        <Route path='/envio' element={<SendPackage />} />
        <Route path='/factura' element={<Invoice />} />
      </Routes>
    </AuthContext>
  <Footer />
  </>
}

export default App