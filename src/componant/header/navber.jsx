import assets from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";


const Navber = ({addcoin}) => {
  
    return (
        <div className='w-10/12 mx-auto'>
           

             <div className="navbar bg-base-100 shadow-md  flex justify-between items-center p-2">
      <div >
        <a className="text-xl font-bold text-primary"><img className='' src={assets} alt="" /></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-4 space-x-4 text-[#131313B3]">
          <li><a href="/">Home</a></li>
          <li><a href="/players">Players</a></li>
          <li><a href="/about"> Teams</a></li>
          <li><a href="/about"> About</a></li>
          <li><a href="/about"> Schedules</a></li>
          <li ><a className='flex items-center gap-2 text-[#131313] font-bold' href="/about"> <span className='text-blue-600 font-normal'>{addcoin}</span> Coin <span className='bg-yellow-200 text-2xl'><BsCoin /></span></a></li>
        </ul>

      </div>
    </div>
        </div>
    );
};

export default Navber;