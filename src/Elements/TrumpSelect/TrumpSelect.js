
const TrumpSelect = ()=>
{

  
  var arr = [];
  var fax=[];
  for(let i=0;i<52;i++)
  {
    arr[i]=i+1;
  }
     arr.sort(function()
     {return 0.5- Math.random()});
  for(let i=1;i<=4;i++)
  {
       fax[i]=`./cardimage/${i*13}.png`
  }
   function Cardclick()
   {

   }




  return (

        
    <span>
    <div class="Chanceslider">
       <div class="Chanceslides">
         <div id="slide-1" onClick={() => Cardclick(1)}>
           <img class="Chanceimg" src={fax[1]}/>
           <p>CLUB</p>
         </div>
         <div id="slide-2" onClick={() => Cardclick(2)}>
           <img class="Chanceimg" src={fax[2]}/>
           <p>HEART</p>
         </div>
         <div id="slide-3" onClick={() => Cardclick(3)}>
           <img class="Chanceimg" src={fax[3]}/>
           <p>SPADE</p>
         </div>
         <div id="slide-4" onClick={() => Cardclick(4)}>
           <img class="Chanceimg" src={fax[4]}/>
           <p>DIAMOND</p>
         </div>
          </div>
         </div>
  </span>

      
    )
}

export default TrumpSelect;