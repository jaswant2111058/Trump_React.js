
import { useState } from "react";
const Card = () => {
  var arr = [ 1, 2, 39, 26, 5, 52, 7, 50, 9, 10, 11, 12, 13];
  arr.sort(function(a, b){return a - b});
  var fax = [];
  var disabledValue1 = (false);
  var disabledValue2 = (false);
  var disabledValue3 = (false);
  var disabledValue4 = (false);
  var disabledValue5 = (false);
  var disabledValue6 = (false);
  var disabledValue7 = (false);
  var disabledValue8 = (false);
  var disabledValue9 = (false);
  var disabledValue10 = (false);
  var disabledValue11 = (false);
  var disabledValue12 = (false);
  var disabledValue13 = (false);
  
  const playerNum = 1;
  

  const [preTurn, setPerTurn] = useState()
  const [turn, setTurn] = useState(1)
  const [suit, setSuit] = useState(1)
  const [bajji, setName] = useState()
  const [bajji2, setName1] = useState()
  const [bajji3, setName2] = useState()
  const [bajji4, setName3] = useState()
  const [handNo, sethandNo] = useState();
  

  if (playerNum != turn) {
     disabledValue1 = (true);
   disabledValue2 = (true);
   disabledValue3 = (true);
   disabledValue4 = (true);
   disabledValue5 = (true);
   disabledValue6 = (true);
   disabledValue7 = (true);
   disabledValue8 = (true);
   disabledValue9 = (true);
   disabledValue10 = (true);
   disabledValue11 = (true);
   disabledValue12 = (true);
   disabledValue13 = (true);
  } 
  else  {

      for(let i=0;i<13;i++)
      {
        if(parseInt((arr[i]-1)/13)+1!=suit)
        { 
          switch(i)
          {
          case 0:
          disabledValue1 = (true);break;
          case 1:
          disabledValue2 = (true);break;
          case 2:
          disabledValue3 = (true);break;
          case 3:
          disabledValue4 = (true);break;
          case 4:
          disabledValue5 = (true);break;
          case 5:
          disabledValue6 = (true);break;
          case 6:
          disabledValue7 = (true);break;
          case 7:
          disabledValue8 = (true);break;
          case 8:
          disabledValue9 = (true);break;
          case 9:
          disabledValue10 = (true);break;
          case 10:
          disabledValue11 = (true);break;
          case 11:
          disabledValue12 = (true);break;
          case 12:
          disabledValue13 = (true);break;
          }
        }
      }

  }
  
 



  let hand = []
  for (let i = 1; i <= handNo; i++) {
    hand[i] = (
      <div class='hand'>
        <img class='handimg' src="./cardimage/Card_hand.png" />
        <p class='handText'>Hand {i}</p>
      </div>
    )
  }



  function chance(turn, cardNum) {
    if (turn == 1){ 
      setName(`./cardimage/${cardNum}.png`) 
    }
    else if (turn == 2) {
      setName1(`./cardimage/${cardNum}.png`)
    }
    else if (turn == 3) {
      setName2(`./cardimage/${cardNum}.png`)
    }
    else if (turn == 4) {
      setName3(`./cardimage/${cardNum}.png`)
    }
  }  




  for (let i = 0; i < 13; i++) {
    fax[i+1] = `./cardimage/${arr[i]}.png`
  }




  let Cardclick = (num, value) => {
    console.log(num)
    document.getElementById(`slide-${value}`).style.display = "none"
    if (playerNum == 1) { 
      setName(`./cardimage/${num}.png`) 
    }
    else if (playerNum == 2) {
      setName1(`./cardimage/${num}.png`)
    }
    else if (playerNum == 3) {
      setName2(`./cardimage/${num}.png`)
    }
    else if (playerNum == 4) {
      setName3(`./cardimage/${num}.png`)
    }

  }




  return (
    <div>
      <main>
        <div class="slider">
          <div class="slides">
            <button id="slide-1" disabled={disabledValue1} onClick={() => Cardclick(arr[0], 1)}>
              <img src={fax[1]} />
            </button>
            <button id="slide-2" disabled={disabledValue2} onClick={() => Cardclick(arr[1], 2)}>
              <img src={fax[2]} />
            </button>
            <button id="slide-3" disabled={disabledValue3} onClick={() => Cardclick(arr[2], 3)}>
              <img src={fax[3]} />
            </button>
            <button id="slide-4" disabled={disabledValue4} onClick={() => Cardclick(arr[3], 4)}>
              <img src={fax[4]} />
            </button>
            <button id="slide-5" disabled={disabledValue5} onClick={() => Cardclick(arr[4], 5)}>
              <img src={fax[5]} />
            </button>
            <button id="slide-6" disabled={disabledValue6} onClick={() => Cardclick(arr[5], 6)} >
              <img src={fax[6]} />
            </button>
            <button id="slide-7" disabled={disabledValue7} onClick={() => Cardclick(arr[6], 7)}>
              <img src={fax[7]} />
            </button>
            <button id="slide-8" disabled={disabledValue8} onClick={() => Cardclick(arr[7], 8)}>
              <img src={fax[8]} />
            </button>
            <button id="slide-9" disabled={disabledValue9} onClick={() => Cardclick(arr[8], 9)}>
              <img src={fax[9]} />
            </button>
            <button id="slide-10" disabled={disabledValue10} onClick={() => Cardclick(arr[9], 10)} >
              <img src={fax[10]} />
            </button>
            <button id="slide-11" disabled={disabledValue11} onClick={() => Cardclick(arr[10], 11)} >
              <img src={fax[11]} />
            </button>
            <button id="slide-12" disabled={disabledValue12} onClick={() => Cardclick(arr[11], 12)} >
              <img src={fax[12]} />
            </button>
            <button id="slide-13" disabled={disabledValue13} onClick={() => Cardclick(arr[12], 13)} >
              <img src={fax[13]} />
            </button>
          </div>
        </div>
      </main>
      <br></br><br></br>
      <span>
        <div class="Chanceslider">
          <div class="Chanceslides">
            <div id="Chanceslide-1">
              <img class="Chanceimg" src={bajji} />
              <p class="handText">PLAYER 1</p>
            </div>
            <div id="Chanceslide-2">
              <img class="Chanceimg" src={bajji2} />
              <p class="handText">PLAYER 2</p>
            </div>
            <div id="Chanceslide-3">
              <img class="Chanceimg" src={bajji3} />
              <p class="handText">PLAYER 3</p>
            </div>
            <div id="Chanceslide-4">
              <img class="Chanceimg" src={bajji4} />
              <p class="handText">PLAYER 4</p>

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
;