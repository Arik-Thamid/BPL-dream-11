import type { Dispatch, SetStateAction } from "react"
import type { player } from "../../types/playerType"

import SelectedPlayerCard from "./SelectedPlayerCard"

interface selectedPlayertype{
  selectedPlayer:player[]
  setSelectedPlayer:Dispatch<SetStateAction<player[]>>
  coin:number
  setCoin:Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({selectedPlayer, setSelectedPlayer, coin, setCoin}:selectedPlayertype) => {
   
 if(selectedPlayer.length === 0){
    return <div className="mx-10 my-10 flex flex-col justify-center items-center">
      <h2 className="text-3xl text-gray-400">No selected player</h2>
    </div>
  }

  
  return (
    <div className="my-10 flex flex-col gap-4">
      {
        selectedPlayer.map((player , idx:number) => {
          return <SelectedPlayerCard key={idx} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin} player={player}/>
        })
      }
    </div>
  )
}

export default SelectedPlayers