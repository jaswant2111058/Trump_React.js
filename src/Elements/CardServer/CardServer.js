
import { useState } from "react";
const Card = () => {

    const trumpSuit =0;
    var player = [];
    for(let i=0;i<52;i++)
    {
      player[i]=i+1;
    }
     
       player.sort(function()
       {return 0.5- Math.random()});
  
    let player1=[] 
    for(let i=0;i<13;i++)
    {
      player1[i]=player[i];
    }
    let player2=[]
    for(let i=13;i<26;i++)
    {
      player2[i]=player[i];
    }
    let player3=[]
    for(let i=26;i<39;i++)
    {
      player3[i]=player[i];
    }
    let player4=[]
    for(let i=39;i<52;i++)
    {
      player4[i]=player[i];
    }
    
  var fax = [];
  const playerNum = 1;

  const [turn1, setName] = useState()
  const [turn2, setName1] = useState()
  const [turn3, setName2] = useState()
  const [turn4, setName3] = useState()
  const [handNo, sethandNo] = useState()

  const hand =[]
  for(let i=1;i<=handNo;i++)
    {
    hand[i]=(
  <div class ='hand'>
    <img class='handimg' src="./cardimage/Card_hand.png"/>
      <p class = 'handText'>Hand {i}</p>
      </div>
    )
      }
      function chance(turn,cardNum)
      {
        if(turn==1)
        {setName(`./cardimage/${cardNum}.png`)}
        else if(turn==2){
          setName1(`./cardimage/${cardNum}.png`)
        }
        else if(turn==3){
        setName2(`./cardimage/${cardNum}.png`)
        }
        else if(turn==4)
        {
          setName3(`./cardimage/${cardNum}.png`) 
        }
      }

  for (let i = 0; i <= 13; i++) {
    fax[i] = `./cardimage/${player1[i]}.png`
  }

  let Cardclick = (num, value) => {

    console.log(num)
    document.getElementById(`slide-${value}`).style.display = "none"
    if(playerNum==1)
    {setName(`./cardimage/${num}.png`)}
    else if(playerNum==2){
      setName1(`./cardimage/${num}.png`)
    }
    else if(playerNum==3){
    setName2(`./cardimage/${num}.png`)
    }
    else if(playerNum==4)
    {
      setName3(`./cardimage/${num}.png`) 
    }

       var HandCheck=[];
       var HandArray=[];
    function CheckHand(num){
                
        let value = num;
        if(num%13==trumpSuit)
        {
            value=num+52;
        }
            HandCheck.push(value)
        
                if(HandCheck.length<=4)
                {
                    let max = Math.max(HandCheck[0],HandCheck[1],HandCheck[2],HandCheck[3])
                   let index= HandCheck.indexOf(max)
                   if(index==1&&index==3)
                   {
                    HandArray.push(1)
                   }
                   else{
                    HandArray.push(2)
                   }
                   return index;
                }
           
                
    }
         





    
  }
  return (
    <div>
      <main>

        <div class="slider">
          <div class="slides">
            <div id="slide-1">
              <img src={fax[1]} onClick={() => Cardclick(player1[1], 1)} />
            </div>
            <div id="slide-2">
              <img src={fax[2]} onClick={() => Cardclick(player1[2], 2)} />
            </div>
            <div id="slide-3">
              <img src={fax[3]} onClick={() => Cardclick(player1[3], 3)} />
            </div>
            <div id="slide-4">
              <img src={fax[4]} onClick={() => Cardclick(player1[4], 4)} />
            </div>
            <div id="slide-5">
              <img src={fax[5]} onClick={() => Cardclick(player1[5], 5)} />
            </div>
            <div id="slide-6">
              <img src={fax[6]} onClick={() => Cardclick(player1[6], 6)} />
            </div>
            <div id="slide-7">
              <img src={fax[7]} onClick={() => Cardclick(player1[7], 7)} />
            </div>
            <div id="slide-8">
              <img src={fax[8]} onClick={() => Cardclick(player1[8], 8)} />
            </div>
            <div id="slide-9">
              <img src={fax[9]} onClick={() => Cardclick(player1[9], 9)} />
            </div>
            <div id="slide-10">
              <img src={fax[10]} onClick={() => Cardclick(player1[10], 10)} />
            </div>
            <div id="slide-11">
              <img src={fax[11]} onClick={() => Cardclick(player1[11], 11)} />
            </div>
            <div id="slide-12">
              <img src={fax[12]} onClick={() => Cardclick(player1[12], 12)} />
            </div>
            <div id="slide-13">
              <img src={fax[13]} onClick={() => Cardclick(player1[13], 13)} />
            </div>
          </div>
        </div>
      </main>
      <br></br><br></br>
      <span>
        <div class="Chanceslider">
          <div class="Chanceslides">
            <div id="Chanceslide-1">
              <img class="Chanceimg" src={turn1} />
              <p class = "handText">PLAYER 1</p>
            </div>
            <div id="Chanceslide-2">
              <img class="Chanceimg" src={turn2} />
              <p class = "handText">PLAYER 2</p>
            </div>
            <div id="Chanceslide-3">
              <img class="Chanceimg" src={turn3} />
              <p class = "handText">PLAYER 3</p>
            </div>
            <div id="Chanceslide-4">
              <img class="Chanceimg" src={turn4} />
              <p class = "handText">PLAYER 4</p>

            </div>
          </div>
        </div>
      </span>
      <div class="handslider">
          <div class="handslides">
   {hand}</div>
   </div>
      </div>
  )
}

export default Card;