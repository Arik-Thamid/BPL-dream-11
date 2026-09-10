import { type Dispatch, type SetStateAction } from "react"
import type { player } from "../../types/playerType"
import PlayerCard from "./PlayerCard"

interface availableplayer{
    players:player[]
    coin:number
    setCoin:Dispatch<SetStateAction<number>>
    selectedPlayer:player[]
    setSelectedPlayer:Dispatch<SetStateAction<player[]>>
}
const AvailablePlayers = ({players, coin, setCoin, selectedPlayer, setSelectedPlayer}:availableplayer) => {
  
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
        {
            players.map((player:player , index:number) =>{
               return <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
            })
        }
    </div>
  )
}

export default AvailablePlayers