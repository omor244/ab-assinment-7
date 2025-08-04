import Showselectedplayer from "./Showselectedplayer";



const Selected = ({selectedplayer,handelDeleteplayer}) => {
    return (
        <div>
             <h1>Selected Player ({selectedplayer.length}/6)</h1>
             {
                selectedplayer.map(p =><Showselectedplayer handelDeleteplayer={handelDeleteplayer} key={p.id} p={p}></Showselectedplayer>)
             }
        </div>
    );
};

export default Selected;