import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Footer from "./components/footer"
import Header from "./components/header"
import { ThemeContext } from "./helpers/context"
import "./App.css"

const App = () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(curr => (curr === "light" ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Header />
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
