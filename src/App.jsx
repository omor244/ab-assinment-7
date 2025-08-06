
import { useState } from 'react'
import './App.css'
import Banner from './componant/header/Banner'
import Navber from './componant/header/navber'
import Main from './componant/main/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [isactive, setisactive] = useState({
    Cart: true,
    status: "available"
  })
  // console.log(isactive)
  const [addcoin, setconin] = useState(0)



  const [selectedplayer, setselectedplayer] = useState([])


 const topCenter = () => {
    toast.info(' add money👋!', {
      position: 'top-center',
    });
  };
   const topRight = () => {
    toast.success('Successfully 👋!', {
      position: 'top-center',
    });
  };

  const handeladdcoin = (addcoins) => {
    setconin(addcoins)

  }



  const handelisactive = (status) => {


    console.log(status)
    if (status === 'available') {
      setisactive({
        Cart: true,
        status: "available"
      })
    }
    else {
      setisactive({
        Cart: false,
        status: "selected"
      })
    }
  }

  const handelselectedplayer = (player) => {
    console.log(player)

    const newplayer = [...selectedplayer, player]

    const usecoin = addcoin - player.price
    setconin(usecoin)
    if (usecoin > 0) {
      setselectedplayer(newplayer)
       topRight()
      
    }
    else if (usecoin < 0) {

      setconin(addcoin)
      // toast('You do not have enough Money!')
      topCenter()
    }

  }

  const handelDeleteplayer = (id) => {
    const remainingplayer = selectedplayer.filter((p) => p.id !== id)
    setselectedplayer(remainingplayer)
  }


  return (
    <>
      <div>
        <Navber addcoin={addcoin}></Navber>
        <Banner addcoin={addcoin} handeladdcoin={handeladdcoin}></Banner>
      </div>
      <div>
        <Main isactive={isactive} handelisactive={handelisactive} handelselectedplayer={handelselectedplayer} selectedplayer={selectedplayer} handelDeleteplayer={handelDeleteplayer}></Main>

      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
