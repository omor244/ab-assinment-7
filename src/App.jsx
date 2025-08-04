
import {  useState } from 'react'
import './App.css'
import Banner from './componant/header/Banner'
import Navber from './componant/header/navber'
import Main from './componant/main/Main'


function App() {
  const [isactive, setisactive] = useState({
    Cart: true,
    status: "available"
  })
// console.log(isactive)
  const [addcoin, setconin] = useState(0)

  const [selectedplayer, setselectedplayer] = useState([])
  
  
  
 
const handeladdcoin = (coin) =>{
  const coins = parseFloat(coin)
  setconin(coins)
}



const handelisactive = ( status) =>{
  

  console.log(status)
  if(status === 'available'){
    setisactive({
      Cart: true,
    status: "available"
    })
  }
  else{
setisactive({
      Cart: false,
    status: "selected"
    })
  }
}

const handelselectedplayer = (player, price) =>{
  const newplayer = [...selectedplayer, player]
  // const usecoin = 
  if(addcoin - price > 0){
    setselectedplayer(newplayer)
  }
  
}

const handelDeleteplayer = (id) =>{
 const remainingplayer = selectedplayer.filter((p) =>p.id !== id)
   setselectedplayer(remainingplayer)
}
 

  return (
    <>
      <div>
           <Navber addcoin={addcoin}></Navber>
           <Banner handeladdcoin={handeladdcoin}></Banner>
      </div>
      <div>
          <Main isactive={isactive}  handelisactive={handelisactive} handelselectedplayer={handelselectedplayer} selectedplayer={selectedplayer} handelDeleteplayer={handelDeleteplayer}></Main>
         
      </div>
    </>
  )
}

export default App
