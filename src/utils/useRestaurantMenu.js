import { useEffect, useState} from "react"
import { MENU_LINK } from "../utils/constants";



const useRestaurantMenu =(restid)=>{
    const [restInfo, setRestInfo] = useState(null)


    useEffect(()=>{
        fetchDataresMenu()
    },[])

    const fetchDataresMenu = async ()=>{
        let dataMenu = await fetch(MENU_LINK + restid)
        let jsonMenu = await dataMenu.json()
        setRestInfo(jsonMenu?.data)
        // console.log(jsonMenu)

    }
    return restInfo

}

export default useRestaurantMenu