import { Routes, Route } from "react-router-dom";
import { HomePage, Login, Webface  } from "./components"


const App = () => {
  const user = false;
  if(user) return <HomePage/>
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/webface" element={<Webface/>}/>
    </Routes>
    </>
  )
}

export default App