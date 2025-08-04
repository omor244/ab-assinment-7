import Singleplayer from "./singleplayer";
import { useEffect, useState } from 'react'

const Available = ({handelselectedplayer}) => {
 const [availableplayer, setavailableplayer] = useState([])


  useEffect(() =>{
  fetch('../public/data.json')
 .then(res => res.json())
 .then(data => setavailableplayer(data))
  },[])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 space-y-10 ">
              {
            availableplayer.map(player =><Singleplayer key={player.id} player={player} handelselectedplayer={handelselectedplayer} ></Singleplayer> )
           }
             
        </div>
    );
};

export default Available;