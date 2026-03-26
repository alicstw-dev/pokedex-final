import HomePage from "@/pages/HomePage"
import { Outlet } from "react-router"

function App() {
 return (
  <div className="flex items-center justify-center h-screen">
   <HomePage/>
   <Outlet/>
  </div>
 )
}

export default App
