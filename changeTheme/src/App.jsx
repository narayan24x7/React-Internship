import Header from './components/ToggleBtn'
import ThemeContextProvider from "./context/ThemeContextProvider"
import Toggle from './components/Toggle'
import ToggleBtn from './components/ToggleBtn'
import Card from './components/Card'

function App() {


  return (
    <ThemeContextProvider>
      <div>
        <ToggleBtn />
        <Toggle />
        <Card />
      </div>

    </ThemeContextProvider>
  )
}
export default App
