
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './componant/header/Banner'
import Navber from './componant/header/navber'
import Main from './componant/main/Main'


function App() {
  const [isactive, setisactive] = useState({
    Cart: true,
    status: "available"
  })
  const [availableplayer, setavailableplayer] = useState([])

  useEffect(() =>{
    fetch()
  },[])


const handelisactive = ( status ) =>{
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
 

  return (
    <>
      <div>
           <Navber></Navber>
           <Banner></Banner>
      </div>
      <div>
          <Main isactive={isactive} handelisactive={handelisactive}></Main>
         
      </div>
    </>
  )
}

export default App
