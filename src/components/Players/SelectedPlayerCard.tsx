import { MdDelete } from "react-icons/md"
import type { player } from "../../types/playerType"
import type { Dispatch, SetStateAction } from "react"

interface selectedPlayertype{
  selectedPlayer:player[]
  setSelectedPlayer:Dispatch<SetStateAction<player[]>>
  coin:number
  setCoin:Dispatch<SetStateAction<number>>
  player: player
}

const SelectedPlayerCard = ({selectedPlayer, setSelectedPlayer, coin, setCoin ,player}:selectedPlayertype) => {
    
    const handledelete =((player:player, playerName:string)=>{
    setSelectedPlayer(
      selectedPlayer.filter((player) => player.playerName !== playerName)
    )
    
    const newCoinPrice = coin + player.price
    setCoin(newCoinPrice)

  })
  



  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
              {/* Left side */}
              <div className="flex items-center gap-3">
                {/* Player Image */}
                <div className="h-20 w-20 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={player.playerImg}
                    alt="player Image"
                    className="h-full w-full object-cover"
                  />
                </div>
    
                {/* Player Info */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {player.playerName}
                  </h3>
    
                  <p className="text-[19px] text-gray-500">
                    {player.playerType}
                  </p>
                </div>
              </div>
    
              {/* Delete Icon */}
              <button
                onClick={()=> handledelete(player, player.playerName)}
                type="button"
                className="text-red-400 hover:text-red-600 text-2xl cursor-pointer"
              >
                <MdDelete />
              </button>
     </div>
  )
}

export default SelectedPlayerCard