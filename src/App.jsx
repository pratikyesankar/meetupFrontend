import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import EventCard from "./components/EventCard"
import EventNavbar from "./components/EventNavbar"

function App() {
  return (
    <>
      <EventNavbar />
      <hr />
      <EventCard />
    </>
  )
}

export default App
