

import { useNavigate } from "react-router-dom";
import './Play.css'
const Play=()=>{

const navigate = useNavigate();

    function create(){
        navigate('/CreateRoom')
    }
    function join(){
        navigate('/JoinRoom')
    }
    return(
                <>
      
          <div className="Playlides">
            <div className="PlayCard">
              <p>Trup Card By Jassi</p>
              <h5>To Play Join A Room Or Create A Room</h5>
                <br>
                </br>
                <br></br>
                <button className='CreateBtn' onClick={create}> Create Room</button>
                <br></br>
                <br></br>
                <button className='JoinBtn' onClick={join}> Join Room</button>
                </div>
          </div>
                </>
    
    )
}

export default Play;

