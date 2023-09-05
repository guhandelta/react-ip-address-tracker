import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import Stats from "./Stats"

const IPAddress = () => {
   

  return (
    <div className="flex flex-col h-screen relative">
        <SearchBar />
        <Stats />
    </div>
  )
}

export default IPAddress