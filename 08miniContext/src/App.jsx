import Login from "./componets/Login"
import Profile from "./componets/Profile"
import UserContextProvider from "./Context/UserContextProvider"
import './App.css'


function App() {
 

  return (
    <UserContextProvider>
      <h1>
        reaact
      </h1>
         <Profile />
         <Login />
    </UserContextProvider >
  )
}

export default App
