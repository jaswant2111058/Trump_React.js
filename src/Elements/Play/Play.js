

import { useNavigate } from "react-router-dom";
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
        <div className="Playlider">
          <div className="Playlides">
            <div id="slide-1">
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
        </div>


                </>
    
    )
}

export default Play;

