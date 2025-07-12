import { useEffect } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Theme from "./components/Theme/Theme"
import Home from "./page/Home"
import "animate.css"
import {WOW} from "wowjs"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { motion } from "framer-motion"


function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <ThemeContextProvider>
        <Header/>
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.main>
        <Home/>
        <Footer/>
        <Theme/>
      </ThemeContextProvider>


      
    </>
  )
}

export default App