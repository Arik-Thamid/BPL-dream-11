import { FaFlag, FaUserAlt } from "react-icons/fa"
import type { player } from "../../types/playerType"
import { useState, type Dispatch, type SetStateAction } from "react"
import { toast } from "react-toastify"

interface playerCoinType{
  player:player
  coin:number
  setCoin:Dispatch<SetStateAction<number>>
  selectedPlayer:player[]
  setSelectedPlayer:Dispatch<SetStateAction<player[]>>
}

function PlayerCard({player, coin, setCoin, selectedPlayer, setSelectedPlayer}:playerCoinType) {
  const [isSelected, setIsSelected] = useState(false)
  

  const buttonHandler =()=>{
    if(coin < player.price){
      return toast.error("Coin is not enough for buying")
    }

    const newCoin = coin - player.price
    setCoin(newCoin)
    setIsSelected(true)
    toast(`${player.playerName} is selected`)
    setSelectedPlayer([...selectedPlayer, player])
    

  }
  

  return (
    
   <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

  {/* Player Image */}
  <figure className="mx-4 mt-4 overflow-hidden rounded-xl bg-base-200">
    <img
      className="h-64 w-full   transition-transform duration-500 group-hover:scale-105"
      src={player.playerImg}
      alt={player.playerName}
    />
  </figure>

  {/* Card Body */}
  <div className="p-5">

    {/* Name */}
    <div className="mb-4 flex items-center gap-2">
      <FaUserAlt  />

      <h2 className="text-xl font-bold text-base-content">
        {player.playerName}
      </h2>
    </div>

    {/* Country + Player Type */}
    <div className="mb-5 flex items-center justify-between">

      <div className="flex items-center gap-2">
        <FaFlag className="text-gray-500" />

        <span className="text-sm font-medium text-gray-600">
          {player.origin}
        </span>
      </div>

      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
        {player.playerType}
      </span>

    </div>

    {/* Divider */}
    <div className="mb-5 h-px bg-base-300"></div>

    {/* Rating */}
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-sm font-semibold text-gray-500">
        Rating
      </h3>

      <div className="flex items-center gap-1">
        <span className="text-amber-400">★</span>
        <span className="font-semibold">4.8</span>
      </div>
    </div>

    {/* Player Details */}
    <div className="space-y-3 text-sm">

      <div className="flex items-center justify-between">
        <span className="text-gray-500">
          Batting Style
        </span>

        <span className="font-medium text-base-content">
          {player.battingStyle}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-500">
          Bowling Style
        </span>

        <span className="font-medium text-base-content">
          {player.bowlingStyle}
        </span>
      </div>

    </div>

    {/* Price + Button */}
    <div className="mt-6 flex items-center justify-between border-t border-base-300 pt-5">

      <div>
        <p className="text-xs text-gray-500">
          Price
        </p>

        <p className="text-xl font-bold text-base-content">
          ${player.price}
        </p>
      </div>

      <button
        onClick={() => buttonHandler()}
        disabled={isSelected}
        className={` rounded-lg border border-amber-400 px-4 py-2 text-sm font-semibold text-amber-500 transition-all duration-200 hover:bg-amber-400 hover:text-white hover:shadow-lg  disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 disabled:hover:text-gray-500 disabled:hover:shadow-none`}
      >
        {isSelected ? "Selected" : "Choose Player"}
      </button>

    </div>

  </div>
</div>
  )
}

export default PlayerCard