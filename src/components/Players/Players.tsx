import { use, useState, type Dispatch, type SetStateAction } from "react"
import type { player } from "../../types/playerType"
import AvailablePlayers from "./AvailablePlayers"
import SelectedPlayers from "./SelectedPlayers"

interface playerprops{
    players:Promise<player[]>
    coin:number
    setCoin:Dispatch<SetStateAction<number>>
}

const Players = ({players, coin, setCoin}:playerprops) => {
    const playerData = use(players) 
    const [playerbtn, setPlayerbtn] = useState('available')
    const [selectedPlayer, setSelectedPlayer] = useState<player[]>([])

    // const buttonHandler =(type : 'available' | 'selected')=>{
    //     setPlayerbtn(type)
    // }

  return (
    <div className="container mx-auto my-10" >
        <div className="flex justify-between ">
            <h2 className="font-bold text-xl">{playerbtn === 'available'? "Available Players": 'Selected Players'}</h2>
            <div className="flex">
                <button onClick={()=> setPlayerbtn('available')} className={`btn ${playerbtn === 'available'? 'btn-success':''} rounded-r-none`}>Available players</button>
                
                <button onClick={()=> setPlayerbtn('selected')} className={`btn  ${playerbtn ==='selected'?'btn-success':''} rounded-l-none`}>Selected players ({selectedPlayer.length})</button>
            </div>
        </div>
       {playerbtn === 'available'? <AvailablePlayers players={playerData} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/> : <SelectedPlayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}  coin={coin} setCoin={setCoin} />}
    </div>
  )
}

export default Players