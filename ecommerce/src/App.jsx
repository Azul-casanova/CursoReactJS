import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemList from './components/ItemList/ItemList'
import ProductDetailsContainer from './components/ProductDetailsContainer/ProductDetailsContainer'
import Page404 from './components/Page404/Page404'


function App() {


  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>     
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/producto/:productId' element={<ProductDetailsContainer/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>



  )

  
}

export default App
