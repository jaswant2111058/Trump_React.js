
import { useState,useMemo, useEffect, useCallback } from "react";
import { Await,useNavigate } from "react-router-dom";
import io from "socket.io-client";

const Card = () => {

  var localSocket =JSON.parse(localStorage.getItem('socket'))
 // console.log(localSocket)
const socket= useMemo(()=>(io.connect('https://trump-cards.onrender.com')),[]);
socket.emit('reConnection',localSocket)
//socket.id=localSocket.id
socket.playerNo=localSocket.playerNo
socket.code = localSocket.code
socket.TrumpPlayer = localSocket.TrumpPlayer
socket.name=localSocket.name
socket.player=[localSocket.player1,localSocket.player2,localSocket.player3,localSocket.player4]
socket.player2=localSocket.player2
socket.player1=localSocket.player1
socket.player3=localSocket.player3
socket.player4=localSocket.player4
socket.CardArray = localSocket.CardArray
socket.trumpSuit=localSocket.trumpSuit


 const arr = localSocket.CardArray.sort((a,b)=>a-b)
  var DrawCard = [];
  const navigate = useNavigate();
  var fax = [];
  var disabledValue1 = (true);
  var disabledValue2 = (true);
  var disabledValue3 = (true);
  var disabledValue4 = (true);
  var disabledValue5 = (true);
  var disabledValue6 = (true);
  var disabledValue7 = (true);
  var disabledValue8 = (true);
  var disabledValue9 = (true);
  var disabledValue10 = (true);
  var disabledValue11 = (true);
  var disabledValue12 = (true);
  var disabledValue13 = (true);
  
  const playerNum = (socket.playerNo-1)%4;
  const[DrawnCard,setDrawnCard] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12])
  const [suit, setSuit] = useState()
  const [turn, setTurn] = useState((socket.TrumpPlayer-1)%4)
  const [inning, setInning] = useState(0)
  const [bajji, setName] =   useState(`./cardimage/0.png`)
  const [bajji2, setName1] = useState(`./cardimage/0.png`)
  const [bajji3, setName2] = useState(`./cardimage/0.png`)
  const [bajji4, setName3] = useState(`./cardimage/0.png`)
  const [handNo, sethandNo] =useState(0);
  const [handyou, sethandyou] =useState(0);
  const [chaal, setChaal] =useState([]);
  

  //const [hand1,setHand1]=useState()
  
    //  setArray(socket.CardArray);
     // setArray(arr.sort(function(a, b){return a - b}) )
   //  //console.log(DrawnCard)
   //console.log(socket.trumpSuit,suit,DrawnCard,playerNum,inning)

  if (playerNum == turn && inning==0)
  {
    disabledValue1 = (false);
    disabledValue2 = (false);
    disabledValue3 = (false);
    disabledValue4 = (false);
    disabledValue5 = (false);
    disabledValue6 = (false);
    disabledValue7 = (false);
    disabledValue8 = (false);
    disabledValue9 = (false);
    disabledValue10 = (false);
    disabledValue11 = (false);
    disabledValue12 = (false);
    disabledValue13 = (false);
   // //console.log('jjjjjjj')
  }
  else if(playerNum == turn && inning!=0)
  {////console.log('ttttttt')
    let flag=0;
        for(let i=0;i<DrawnCard.length;i++)
        {
          if((parseInt((arr[DrawnCard[i]]-1)/13))===suit)
          {
            flag=1
            break;
          } 
          ////console.log(parseInt((arr[DrawnCard[i]]-1)/13))
        }
      //  //console.log(suit,flag,'nnnnnnnn')
        if(flag){
       //   //console.log('kkkkkkkkk')
    for(let i=0;i<13;i++)
        {
          if((parseInt((arr[i]-1)/13))===suit)
          { 
            switch(i) 
            {
            case 0:
            disabledValue1 = (false);break;
            case 1:
            disabledValue2 = (false);break;
            case 2:
            disabledValue3 = (false);break;
            case 3:
            disabledValue4 = (false);break;
            case 4:
            disabledValue5 = (false);break;
            case 5:
            disabledValue6 = (false);break;
            case 6:
            disabledValue7 = (false);break;
            case 7:
            disabledValue8 = (false);break;
            case 8:
            disabledValue9 = (false);break;
            case 9:
            disabledValue10 = (false);break;
            case 10:
            disabledValue11 =(false);break;
            case 11:
            disabledValue12 =(false);break;
            case 12:
            disabledValue13 =(false);break;
            }
          }
        }
    }
    else{
      
      let flag=0;
        for(let i=0;i<DrawnCard.length;i++)
        {
          if((parseInt((arr[DrawnCard[i]]-1)/13))===socket.trumpSuit-1)
          {
            flag=1
            break;
          } 
        }
        if(flag){
        //  //console.log('ssssss')
    for(let i=0;i<13;i++)
        {
          if((parseInt((arr[i]-1)/13)===socket.trumpSuit-1))
          { 
            switch(i) 
            {
            case 0:
            disabledValue1 = (false);break;
            case 1:
            disabledValue2 = (false);break;
            case 2:
            disabledValue3 = (false);break;
            case 3:
            disabledValue4 = (false);break;
            case 4:
            disabledValue5 = (false);break;
            case 5:
            disabledValue6 = (false);break;
            case 6:
            disabledValue7 = (false);break;
            case 7:
            disabledValue8 = (false);break;
            case 8:
            disabledValue9 = (false);break;
            case 9:
            disabledValue10 = (false);break;
            case 10:
            disabledValue11 =(false);break;
            case 11:
            disabledValue12 =(false);break;
            case 12:
            disabledValue13 =(false);break;
            }
          }
      }
    }
    else{
    //  //console.log('wwwwww')
      disabledValue1 = (false);
      disabledValue2 = (false);
      disabledValue3 = (false);
      disabledValue4 = (false);
      disabledValue5 = (false);
      disabledValue6 = (false);
      disabledValue7 = (false);
      disabledValue8 = (false);
      disabledValue9 = (false);
      disabledValue10 = (false);
      disabledValue11 = (false);
      disabledValue12 = (false);
      disabledValue13 = (false);
    }
    }
  } 
  
  


  let hand = []
  for (let i = 1; i <= handNo; i++) {
    hand[i] = (
      <>
      <div className='hand'>
        <img className='imgHand' src="./cardimage/Card_hand.png" />
        <p className='text'>Hand {i}</p>
      </div>
     
      </>
    )
  }
  let hand1 = null
      if(handNo>=7||handyou>=7)
      {
        document.getElementById('win').style.display='none'
        hand1=(
          <>
          <div className='win'>
        <h1>Game over Team {((turn)%2)+1} Win</h1>
        <button className='start' id='suitsBtn' onClick={NewGame}> New </button>
          
          </div>
          </>
        )
        
       // console.log(turn)
       // socket.emit('win',turn)
      }
     
      function NewGame(){
        
        navigate('/play')
      }  

   


  function chance(turn, cardNum) {
    if (turn == 0){ 
      setName(`./cardimage/${cardNum}.png`) 
    }
    else if (turn == 1) {
      setName1(`./cardimage/${cardNum}.png`)
    }
    else if (turn == 2) {
      setName2(`./cardimage/${cardNum}.png`)
    }
    else if (turn == 3) {
      setName3(`./cardimage/${cardNum}.png`)
    }
  }  
  



  for (let i = 0; i < 13; i++) {
    fax[i+1] = `./cardimage/${arr[i]}.png`
  }




  let Cardclick = (Cardnum, value) => {

      setChaal([...chaal,Cardnum])
    const data = {
      Cardnum:Cardnum,
      Nextturn:(playerNum+1)%4,
      turn:turn,
      inning:(inning+1)%4,
      count:0,
      suit:(parseInt((Cardnum-1)/13)),
      chaal:chaal
    }
  // 
  //  socket.emit('PlayCrad',data)
    socket.emit('CheckHand',data)
    console.log(data)
    document.getElementById(`slide-${value}`).style.display = "none";
    DrawCard=DrawnCard
   // //console.log(DrawCard)
    var index = DrawCard.indexOf(value-1)
    Await(DrawCard.splice(index,1))
    setDrawnCard(DrawCard)
   // //console.log(DrawCard,index,value)
    //  //console.log(DrawnCard,data,value)
  }

    socket.on('Hand', data=>{
    //  console.log(data)
      chance(data.turn,data.Cardnum)
      setChaal([...chaal,data.Cardnum])
      setTurn(data.index)
      setInning(data.inning)
      if(data.inning==1)
      {
        setSuit(parseInt((data.Cardnum-1)/13))
      }
      if(playerNum==data.win||((playerNum+2)%4==(data.win))){ 
        sethandNo(handNo+1)
     //  console.log()
       // setTurn(data.index)
      }
      else if(data.win==(playerNum+1)%4||(playerNum+3)%4==data.win)
      {
        sethandyou(handyou+1)
      }
      if(data.win!==null)
      {
        setName(`./cardimage/0.png`)
        setName1(`./cardimage/0.png`)
        setName2(`./cardimage/0.png`)
        setName3(`./cardimage/0.png`)
        setChaal([])
      }
    })




  return (
    <div >
    <div className="Cardlider">
        <div className="Cardlides">
      {hand1}
          <div id='win'> 
           
      <div className="slider">
        <div className="slides">
        <button className='btn' id="slide-1" disabled={disabledValue1} onClick={() => Cardclick(arr[0], 1)}>
            <img className='img' src={fax[1]} />
          </button>
          <button className='btn' id="slide-2" disabled={disabledValue2} onClick={() => Cardclick(arr[1], 2)}>
            <img className='img' src={fax[2]} />
          </button>
          <button className='btn' id="slide-3" disabled={disabledValue3} onClick={() => Cardclick(arr[2], 3)}>
            <img className='img' src={fax[3]} />
          </button>
          <button className='btn' id="slide-4" disabled={disabledValue4} onClick={() => Cardclick(arr[3], 4)}>
            <img className='img' src={fax[4]} />
          </button>
          <button className='btn' id="slide-5" disabled={disabledValue5} onClick={() => Cardclick(arr[4], 5)}>
            <img className='img' src={fax[5]} />
          </button>
          <button className='btn' id="slide-6" disabled={disabledValue6} onClick={() => Cardclick(arr[5], 6)} >
            <img className='img' src={fax[6]} />
          </button>
          <button className='btn' id="slide-7" disabled={disabledValue7} onClick={() => Cardclick(arr[6], 7)}>
            <img className='img' src={fax[7]} />
          </button>
          <button className='btn' id="slide-8" disabled={disabledValue8} onClick={() => Cardclick(arr[7], 8)}>
            <img className='img' src={fax[8]} />
          </button>
          <button className='btn' id="slide-9" disabled={disabledValue9} onClick={() => Cardclick(arr[8], 9)}>
            <img className='img' src={fax[9]} />
          </button>
          <button  className='btn' id="slide-10" disabled={disabledValue10} onClick={() => Cardclick(arr[9], 10)} >
            <img className='img' src={fax[10]} />
          </button>
          <button className='btn' id="slide-11" disabled={disabledValue11} onClick={() => Cardclick(arr[10], 11)} >
            <img className='img' src={fax[11]} />
          </button>
          <button className='btn' id="slide-12" disabled={disabledValue12} onClick={() => Cardclick(arr[11], 12)} >
            <img className='img' src={fax[12]} />
          </button>
          <button  className='btn' id="slide-13" disabled={disabledValue13} onClick={() => Cardclick(arr[12], 13)} >
            <img className='img' src={fax[13]} />
          </button> 
           </div>
         </div>
         <p>Turn {socket.player[turn]}</p>
         <div className='chance1'>          
           <div className='chance' >
           <img className="imgChance" src={bajji} />
            <p className="text">{socket.player1}</p>
         </div>
         <div className='chance' >
         <img className="imgChance" src={bajji2} />
            <p className="text">{socket.player2}</p>
         </div>
        </div>
        <div className='chance1'>          
         <div className='chance' >
         <img className="imgChance" src={bajji3} />
            <p className="text">{socket.player3}</p> 
         </div>
         <div className='chance' >
         <img className="imgChance" src={bajji4} />
            <p className="text">{socket.player4}</p>
         </div>
        </div>
        <div className='HandMain'> 
        {hand}<br></br>
        </div>
        <h5>{socket.name}</h5>
         </div>
         
        </div>
      </div>
    </div>
  )
} 



export default Card;