import assets from '../../assets/bg-shadow.png'
import bannerimg from '../../assets/banner-main.png'



const Banner = () => {
    return (
        <div
            className="w-10/12 mx-auto rounded-lg mt-10 "
            style={{
                backgroundImage: `url(${assets})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
  
            <div className='text-center py-36 space-y-4'>
                <img className=' mx-auto' src={bannerimg} alt="img is not found" />
               <h1 className='font-bold text-4xl '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
               <p className='font-medium text-2xl'>Beyond Boundaries Beyond Limits</p>
               <button className=' bg-[#E7FE29] px-4 py-2 text-black rounded-md  border-blue-400 shadow-lg shadow-cyan-500/100'>Claim Free Credit</button>
            </div>
            
        </div>
    );
};

export default Banner;