import { useEffect, useState } from "react"

const useOnlineStatus =()=>{
    const [onlineStatus , setOnlineStatus] = useState(true)


  useEffect(()=>{
        const handleOnline = ()=>{ setOnlineStatus(false)}
        const handleOffline = ()=>{ setOnlineStatus(true)}



    window.addEventListener("offline" , handleOnline)

     window.addEventListener("online" , handleOffline)

    return ()=>{
      window.removeEventListener("offline" ,handleOffline)
      window.removeEventListener("online", handleOnline)

    }

  },[])

  return onlineStatus

}

export default useOnlineStatus