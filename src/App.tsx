import HomePage from "@/pages/HomePage"
import { Outlet } from "react-router"



function App() {

  return (
    <>
    <HomePage />
    <Outlet />
    </>
  )
}

export default App
