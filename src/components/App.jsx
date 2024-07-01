import { useContext } from "react"
import { TranslationContext } from "../Context/INTLContext"
import Header from "./Header/Header";


function App() {

  const { changeLocale, locale } = useContext(TranslationContext);

  const handleSelect = (e) => {
    changeLocale(e.target.value); // = newLanguage
  };

  return (
    <>
    <h1>Multi-idioma</h1>
    <select name="" id="" onChange={handleSelect}>
      <option value="es">Español</option>
      <option value="en">Inglés</option>
    </select>
    <Header />
    </>
  )
}

export default App
