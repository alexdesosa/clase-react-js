import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {

  const title = "Vite + React";

  return(
    <>
    <Navbar />
      <h1>Titulo {title}</h1>
      <h2>Subtitulo {title}</h2>
    </>
  ) 


}

export default App
