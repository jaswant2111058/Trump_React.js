
import io from "socket.io-client";
import { useState,useMemo,useCallback } from "react";
import { useNavigate } from "react-router-dom";
const Room=()=>{
const socket=useMemo(()=>(io.connect('http://localhost:5000')),[]);
const navigate = useNavigate();



const [player1,setplayer1]=useState("player1")
const [player2,setplayer2]=useState("player2")
const [player3,setplayer3]=useState("player3")
const [player4,setplayer4]=useState("player4")
const [TrumpPlayer,setTrump]=useState(1)
    
        socket.on("SetPlayer1",player=>{
          //  socket.name[0]=player
            setplayer1(player)
    
        })
        socket.on("SetPlayer2",player=>{
           // socket.name[1]=player
            setplayer2(player)
        })
        socket.on("SetPlayer3",player=>{
          //  socket.name[2]=player
            setplayer3(player)
        })
        socket.on("SetPlayer4",player=>{
           // socket.name[3]=player
            setplayer4(player)
        }) 
        socket.on("TrumpPlayer",player=>{
            socket.TrumpPlayer=player
            setTrump(player)
        })  

            function add()
            {   
                var code =document.getElementById("code").value
                const name =document.getElementById("name").value
                const player = {
                    name:name,
                    code:code
                }
                socket.name = name
                socket.code = code
            socket.emit("Join",player);
    }
socket.on('play',async data=>
{

        socket.playerNo=data
        const SocketNext ={
          id:socket.id,
          code:socket.code,
          name:socket.name,
          player1:player1,
          player2:player2,
          player3:player3,
          player4:player4,
          playerNo:socket.playerNo,
          TrumpPlayer:socket.TrumpPlayer
         }
      localStorage.setItem('socket',JSON.stringify(SocketNext)) 
        
        //console.log(data)
       //await setSocket(socket)
       socket.disconnect()
        navigate('/selecttrump')    
})

    return(
                <>
        <div className="Roomslider">
          <div className="Roomslides">
            <div id="slide-1">
              <p>JOIN ROOM</p>
              <h4>ENTER ROOM CODE</h4>
              <input id='code' placeholder="Enter Room Code" required></input>
                <br></br><br></br>
                <input id='name' placeholder="Enter your name" required></input>
                <br>
                </br>
                <br></br>
                <button className='roomBtn' onClick={add}> Join Game</button>
                <div className='team1'>
                <p>TEAM 1</p>
                <p>{player1}</p>
                <p>{player2}</p>
                </div>
                
               <div className='team2'>
               <p>TEAM 2</p>
                <p>{player3}</p>
                <p>{player4}</p>
               </div>
              <p>TRUMP SUIT WILL SELECT BY<br></br> PLAYER NO. {TrumpPlayer}</p>
            </div>
          </div>
        </div>


                </>
    
    )
}

export default Room;

