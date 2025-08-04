import { RiDeleteBin6Line } from "react-icons/ri";

const Showselectedplayer = ({p,handelDeleteplayer}) => {
    const {name, player_img, batting_hand} = p
    return (
        <div>
            <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center gap-5 ">
                    <div>
                    <img className="w-20 rounded-full" src={player_img} alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-2xl text-[#131313]">{name}</h1>
                    <h3 className="mt-1 text-[#13131399]">{batting_hand}</h3>
                </div>
                </div>
                <button className="text-red-500" onClick={() =>handelDeleteplayer(p.id)}><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

export default Showselectedplayer;