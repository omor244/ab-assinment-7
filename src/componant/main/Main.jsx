import Available from "./Available";
import Selected from "./Selected";
import "./css/Main.css"


const Main = ({ handelisactive, isactive }) => {
  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className=" bg-base-100 flex justify-between">
        <div >
          <a className=" normal-case text-3xl font-bold text-black">Available Players</a>
        </div>
        <div className=" flex gap-8">
          <button className={`${isactive.Cart ? "active" : "btn"}`} onClick={() => handelisactive('available')}>Available </button>
          <button className={`${isactive.Cart ? "btn" : "active"}`} onClick={() => handelisactive('selected')}>Selected </button>
        </div>
      </div>
      
        {
          isactive.Cart ? <Available></Available> : <Selected></Selected>
        }
      
    </div>
  );
};

export default Main;