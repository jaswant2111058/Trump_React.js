
import { useState } from "react";
const Card = () => {
  var arr = [0, 1, 2, 39, 26, 5,52, 7, 8, 9, 10, 11, 12, 13];
  var fax = [];
  const playerNum = 3;
  const suit =3;
  const turn = 3;
      
  if(playerNum!=turn)
      {
        document.getElementById('slide-1').disabled=true
      }

  const [bajji, setName] = useState()
  const [bajji2, setName1] = useState()
  const [bajji3, setName2] = useState()
  const [bajji4, setName3] = useState()
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
    fax[i] = `./cardimage/${arr[i]}.png`
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

    
  }
  return (
    <div>
      <main>

        <div class="slider">
          <div class="slides">
            <div id="slide-1" onClick={() => Cardclick(arr[1], 1)}>
              <img src={fax[1]}  />
            </div>
            <div id="slide-2">
              <img src={fax[2]} onClick={() => Cardclick(arr[2], 2)}/>
            </div>
            <div id="slide-3">
              <img src={fax[3]} onClick={() => Cardclick(arr[3], 3)} />
            </div>
            <div id="slide-4">
              <img src={fax[4]} onClick={() => Cardclick(arr[4], 4)} />
            </div>
            <div id="slide-5">
              <img src={fax[5]} onClick={() => Cardclick(arr[5], 5)} />
            </div>
            <div id="slide-6">
              <img src={fax[6]} onClick={() => Cardclick(arr[6], 6)} />
            </div>
            <div id="slide-7">
              <img src={fax[7]} onClick={() => Cardclick(arr[7], 7)} />
            </div>
            <div id="slide-8">
              <img src={fax[8]} onClick={() => Cardclick(arr[8], 8)} />
            </div>
            <div id="slide-9">
              <img src={fax[9]} onClick={() => Cardclick(arr[9], 9)} />
            </div>
            <div id="slide-10">
              <img src={fax[10]} onClick={() => Cardclick(arr[10], 10)} />
            </div>
            <div id="slide-11">
              <img src={fax[11]} onClick={() => Cardclick(arr[11], 11)} />
            </div>
            <div id="slide-12">
              <img src={fax[12]} onClick={() => Cardclick(arr[12], 12)} />
            </div>
            <div id="slide-13">
              <img src={fax[13]} onClick={() => Cardclick(arr[13], 13)} />
            </div>
          </div>
        </div>
      </main>
      <br></br><br></br>
      <span>
        <div class="Chanceslider">
          <div class="Chanceslides">
            <div id="Chanceslide-1">
              <img class="Chanceimg" src={bajji} />
              <p class = "handText">PLAYER 1</p>
            </div>
            <div id="Chanceslide-2">
              <img class="Chanceimg" src={bajji2} />
              <p class = "handText">PLAYER 2</p>
            </div>
            <div id="Chanceslide-3">
              <img class="Chanceimg" src={bajji3} />
              <p class = "handText">PLAYER 3</p>
            </div>
            <div id="Chanceslide-4">
              <img class="Chanceimg" src={bajji4} />
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
;