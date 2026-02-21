import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darktheme = () => {
    setThemeMode("dark");
  }

  const lighttheme = () => {
    setThemeMode("light");
  }

//use themeMode to set the class of the div to either "dark" or "light" and use that class to set the background color of the div to either black or white

useEffect(() => {
  document.querySelector('html').classList.remove('light', 'dark');
  document.querySelector('html').classList.add(themeMode);
}, [themeMode]);


  return (
    <ThemeProvider value={{themeMode, darktheme, lighttheme,}}>


    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          < ThemeBtn />

        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />

        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
