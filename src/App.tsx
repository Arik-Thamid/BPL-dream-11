import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players/Players"
import type { player } from "./types/playerType"

const Playersfetch= async(): Promise<player[]>=>{
  const res = await fetch('/data.json')
  const data= await res.json()
  return data
}

const App = () => {
  const [players] = useState(()=> Playersfetch());
  const [coin, setCoin] = useState(1500)
  return (
    <>
    
    <Nav coin={coin}/>
    <Banner/>
    <Suspense fallback={<h1>Loading.....</h1>}>
      <Players players={players} coin={coin} setCoin={setCoin}/>
    </Suspense>
    </>
  )
}

export default App