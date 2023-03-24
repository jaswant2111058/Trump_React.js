
import io from "socket.io-client";

import { useState,useMemo,useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
const Room=()=>{
var socket= useMemo(()=>(io.connect('http://localhost:5000')),[]);
    const value=useMemo(()=>(Math.floor(Math.random() * 9000) + 1000),[])
        socket.code = value
    

const navigate = useNavigate();

    socket.playerNo=1;

const [player1,setplayer1]=useState("player1")
const [player2,setplayer2]=useState("player2")
const [player3,setplayer3]=useState("player3")
const [player4,setplayer4]=useState("player4")
const [teamArray,setTeam]=useState(1)
const [TrumpPlayer,setTrump]=useState(1)
    
        socket.on("SetPlayer2",player=>{
            setplayer2(player)
        })
        socket.on("SetPlayer3",player=>{
            setplayer3(player)
        })
        socket.on("SetPlayer4",player=>{
            setplayer4(player)
        })  
        const code =[
            player1,
            value
    ]
          async  function  add  ()
            {      const Name = await  document.getElementById("name").value
               setplayer1(Name)
              // setplayer1(Name) 
                socket.emit("Create",[Name,socket.code])
            }
        //   socket.emit("Create",code)
        function play(){
            
            const team ={
                teams:teamArray,
                trump:TrumpPlayer
            }
            socket.playerNo = 1
        socket.teams=team.teams
        socket.emit("Essentials",team)
        const SocketNext ={
            id:socket.id,
            code:socket.code,
            name:player1,
            player1:player1,
            player2:player2,
            player3:player3,
            player4:player4,
            playerNo:socket.playerNo,
            TrumpPlayer:TrumpPlayer
           }
        localStorage.setItem('socket',JSON.stringify(SocketNext)) 
       // setSocket(socket)
        socket.disconnect()
        navigate('/selecttrump');
    }
    function Switch(){
        setplayer2(player3)
        setplayer3(player2)
        setTeam(Number(teamArray)+1)
    }
    function trump(num)
    {
        document.getElementById(`${num}`).style.backgroundColor= "teal";
        setTrump(num)
        socket.TrumpPlayer=num
        socket.emit('TrumpPlayer',num)
         
    }
    

    return(
                <>
        <div className="Roomslider">
          <div className="Roomslides">
            <div id="slide-1">
              <p>CREATE ROOM</p>
              <h4>CODE</h4>
                <h1>{socket.code}</h1>
                <input id='name' placeholder="Enter your name" required></input>
                <br>
                </br>
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
               <button className='roomBtn' onClick={Switch}>
                Switch Players
               </button>
               <br></br>
               <p>WHICH PLAYER WILL THE TRUMP SUIT</p>
               <button className='roomBtn' id='1' onClick={()=>{trump(1)}}>1</button>
               <button className='roomBtn' id='2' onClick={()=>{trump(2)}}>2</button>
               <button className='roomBtn' id='3' onClick={()=>{trump(3)}}>3</button>
               <button className='roomBtn' id='4' onClick={()=>{trump(4)}}>4</button>
               <br></br>
               <br>
               </br>
               <button className='roomBtn' onClick={play}>
               PLAY
               </button>
            </div>
          </div>
        </div>
                </>
    
    )
}

export default Room;

