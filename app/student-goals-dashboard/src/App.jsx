import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
