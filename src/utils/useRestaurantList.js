import { useEffect , useState} from "react"
import { REST_LIST } from "./constants"


const useRestaurantList = ()=>{
    const [Listofrest, setListofrest] = useState([]);
    const [filterList, setfilterList] = useState([])

useEffect(()=>{

    fetchData()

},[])

const fetchData = async()=>{
    let data = await fetch(REST_LIST)
    let json = await data.json()
    setListofrest(json?.data.cards)
    setfilterList(json?.data.cards)

}

return { Listofrest , filterList}

}

export default useRestaurantList;