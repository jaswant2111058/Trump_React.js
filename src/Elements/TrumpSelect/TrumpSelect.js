import { useState,useMemo,useCallback } from "react";
import { Await, useNavigate } from "react-router-dom";

const TrumpSelect = ({socket}) => {
    const array =[0,0,0,0,]
    var [CardArray,setCard]= useState(array)  
    const navigate = useNavigate();
    const playerNum = (socket.playerNo-1)%4;
   const soc= useMemo(()=>(socket.emit("SendCard",socket.code)),[])
   const[name,setName]=useState()
socket.on("CardArray",players=>{
    setCard(players[0])
    socket.CardArray = players[0]
    socket.name=[players[1].name1,players[1].name2,players[1].name3,players[1].name4]
   setName(socket.name[playerNum])

    if(socket.playerNo!==socket.TrumpPlayer)
    {
      document.getElementById(`suits`).style.display = "none"
      document.getElementById(`suitsBtn`).style.display = "none"
     }   
  })
  const[faxs,setfax]=useState(`./cardimage/0.png`)
  


  var ImgSoure = [];
  for (let i = 0; i < 4; i++) {
    ImgSoure[i + 1] = `./cardimage/${CardArray[i]}.png`
  }


  var fax = [];
 
  for (let i = 1; i <= 4; i++) {
    fax[i] = `./cardimage/suit_${i}.png`
  }


  function Cardclick(suit) {
   // console.log(socket.playerNo)
    if(socket.playerNo==socket.TrumpPlayer)
    {
      socket.trumpSuit = suit
      socket.emit('trumpSuit',suit)
     // setfax(`./cardimage/${suit*13}.png`)
    }
      
  }

  socket.on('trumpSuits',suit=>{
    socket.trumpSuit=suit
    setfax(`./cardimage/${suit*13}.png`)
    socket.emit('Suit',suit);
  })


  function start()
  {

    socket.emit('start',(socket.TrumpPlayer)%4)
    socket.turn=(socket.TrumpPlayer)%4
    
   
    navigate('/card')
  }
  //console.log(socket.playerNo,socket.TrumpPlayer)
  socket.on('start',turn=>{
    socket.turn = turn
    navigate('/card')
  })



  return (
    <div >
     <div className="Trumplider">
          <div className="Trumplides">
            <div>
            <h3>
        Your First Four Cards Are
      </h3>
        <div className="Trumpslider">
          <div className="Trumpslides">
          <button className='btn' id="slide-1">
            <img className='img' src={ImgSoure[1]} />
            </button>
            <button className='btn' id="slide-2" >
            <img className='img' src={ImgSoure[2]} />
             </button>
             <button className='btn' id="slide-3" >
            <img className='img' src={ImgSoure[3]} />
            </button>
            <button className='btn' id="slide-4">
            <img className='img' src={ImgSoure[4]} />
            </button>
             </div>
           </div>
           <div id='suits'>
           <p>Select The Trump Suit</p>
           <div className='chance1'>          
             <div className='chance' id="slide-1" onClick={() => Cardclick(1)} >
             <img className="imgChance" src={fax[1]} />
              <p className='text'>CLUB</p>
           </div>
           <div className='chance' id="slide-2" onClick={() => Cardclick(2)}>
              <img className="imgChance" src={fax[2]} />
              <p className='text'>HEART</p>
           </div>
                 
             <div className='chance' id="slide-3" onClick={() => Cardclick(3)}>
              <img className="imgChance" src={fax[3]} />
              <p className='text'>SPADE</p>
           </div>
           <div className='chance'id="slide-4" onClick={() => Cardclick(4)}>
              <img className="imgChance" src={fax[4]} />
              <p className='text'>DIAMOND</p>
           </div>
          </div>
          </div>
          <div  >
              <img className="imgChance" src={faxs} />
              <p className='text'>TRUMP SUIT</p>
              <br></br>
          <button className='start' id='suitsBtn' onClick={start}>
            
            START
            </button>
           </div>
           <h5>{name}</h5>
          </div>
          </div>
        </div>
      </div>
  )
}

export default TrumpSelect;