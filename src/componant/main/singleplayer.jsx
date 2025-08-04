

const Singleplayer = ({player,handelselectedplayer}) => {
    const {name, country, player_img, role, batting_hand, price, bowling_type} = player;
  
    return ( <div className=" col-span-1 mt-10">
        
            <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
                <div className="card-body flex flex-col gap-4 p-5 space-y-4">
                   
                        <img className="w-full" src={player_img} alt={name} />
                   
                        <h1 className="font-bold text-xl text-[#131313]">{name}</h1>
                    <div className="flex justify-between">
                        <h2>{country}</h2>
                        <h2>{role}</h2>
                    </div>
                    <h2>Rating</h2>
                    <div >
                        <div >
                            <h3>{batting_hand}</h3>                           
                            <div className="flex justify-between">
                                <h3>{bowling_type}</h3>
                                <h3>{bowling_type}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <h3>price:{price}</h3>
                           <div>
                             
                            <button onClick={() =>handelselectedplayer(player, player.price)} className="btn btn-primary bg-[#E7FE29] py-2 px-3 font-bold">Choose Player</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Singleplayer;

