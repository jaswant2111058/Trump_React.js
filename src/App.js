
import card from "./card.js"
import './App.css'
function App() {
  var arr = [];
  var fax=[];
  for(let i=0;i<52;i++)
  {
    arr[i]=i+1;
  }
     arr.sort(function()
     {return 0.5- Math.random()});
   
  let player1=[] 
  for(let i=0;i<13;i++)
  {
    fax[i]=arr[i];
  }
  let player2=[]
  for(let i=13;i<26;i++)
  {
    player2[i]=arr[i];
  }
  let player3=[]
  for(let i=26;i<39;i++)
  {
    player3[i]=arr[i];
  }
  let player4=[]
  for(let i=39;i<52;i++)
  {
    player4[i]=arr[i];
  }
  
  
  for(let i=0;i<=13;i++)
  {
               
    fax[i]=`./cardimage/${arr[i]}.png`
  }

  return (

    <main>
    <div class="slider">
       <div class="slides">
         <div id="slide-1">
           <img src={fax[1]}/>
         </div>
         <div id="slide-2">
           <img src={fax[2]}/>
         </div>
         <div id="slide-3">
           <img src={fax[3]}/>
         </div>
         <div id="slide-4">
           <img src={fax[4]}/>
         </div>
         <div id="slide-5">
           <img src={fax[5]}/>
         </div>
         <div id="slide-6">
           <img src={fax[6]}/>
         </div>
         <div id="slide-7">
           <img src={fax[7]}/>
         </div>
         <div id="slide-8">
           <img src={fax[8]}/>
         </div>
         <div id="slide-9">
           <img src={fax[9]}/>
         </div>
         <div id="slide-10">
           <img src={fax[10]}/>
         </div>
         <div id="slide-11">
           <img src={fax[11]}/>
         </div>
         <div id="slide-12">
           <img src={fax[12]}/>
         </div>
         <div id="slide-13">
           <img src={fax[13]}/>
         </div>   
       </div>
     </div>

  </main>

  );
}

export default App;
