import { Routes, Route } from "react-router-dom";
import { HomePage, Login, Webface  } from "./components"


const App = () => {
  const user = true;
  if(user) return <HomePage/>
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
     
    </Routes>
    </>
  )
}

export default App