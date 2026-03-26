import HomePage from '@/pages/homepage/HomePage'
import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <HomePage />
      
      <Outlet />
    </div>
  )
}

export default App
