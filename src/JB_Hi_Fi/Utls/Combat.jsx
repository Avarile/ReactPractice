// CombatControl shall load both sides from the start
import { useApiData } from "../Data/ApiProvider"

export const CombatControl = async (target) => {
  // 1st step load the both sides, set the battleStatus to begin, init the BattleLog
  const { getPlayerShip, getEnemyShip, weaponData, spaceCraftData } = useApiData()
  const [battleStatus, setBattleStatus] = useState("Start")
  const [battleLog, setBattleLog] = useState([])
  const [distance, setDistance] = useState({
    distance: 2000,
    relativeSpeed: 0,
  })
  


  // Target selection

  const targetSelection = () => { 
    
  }
  
  const CombatRound = async() => { 

  }
  // 2nd step start the fight, combine all the weapon,
  // try {
  //   await
  // } catch (error) {

  // }
}
