import ApiContainer from "./components/ApiContainer"
import ApiForm from "./components/ApiForm"
import ApiContextProvider from "./context/ApiContextProvider"

function App() {


  return (
    <ApiContextProvider>
      <div className="h-screen bg-gray-800 text-white justify-center item-center text-center p-5">
        <h1 className="text-2xl">API Manager</h1>
        <ApiForm />
        <ApiContainer/>
      </div>
    </ApiContextProvider>
  )
}

export default App
