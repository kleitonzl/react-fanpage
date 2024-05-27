import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'

// import Artists from './components/Characters'
// import Tracks from './components/Characters'


//Routes define as áreas que vamos colocar os nossos routes
//Route recebe o caminho em path. Se esse caminho for o mesmo do URL ele irá renderizar o que está dentro

const App = () => {

  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        {/* <Route path='/tracks' element={<Tracks/>}/>
        <Route path='/artist' element={<Artists/>}/> */}
          {/* <Route path='*' element={<Pagina404/>} //caso seja direcionado uma rota errado */}

      </Routes>
    </BrowserRouter>
  )
}

export default App

//Baixar npm i react-router-dom
//Baixar npm i styled-components


//git init