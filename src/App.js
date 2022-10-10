import React, {useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'

const tg = window.Telegram.WebApp

function App() {
  
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
     <Header />
     <Routes>
      <Route index element={<ProductList />}></Route>
      <Route path={'form'} element={<Form />}></Route>
     </Routes>
    </div>
  );
}

export default App;
