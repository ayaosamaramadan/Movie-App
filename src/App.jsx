
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footerr from './components/Footerr'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footerr />
    </BrowserRouter>
  )
}

export default App
