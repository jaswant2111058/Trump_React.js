import { BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Card from "./Elements/Card/Card";
import Play from "./Elements/Play/Play";
import CreateRoom from "./Elements/CreateRoom/CreateRoom";
import JoinRoom from "./Elements/JoinRoom/JoinRoom";
import TrumpSelect from "./Elements/TrumpSelect/TrumpSelect";
import './Elements/Card/Card.css'
import './Elements/Play/Play.css'
import './Elements/TrumpSelect/TrumpSelect.css'
import './Elements/CreateRoom/CreateRoom.css'
// <Route exact path ="/" element={<JoinRoom setSocket={setSocket}/>}/>
            

function App()
{    const [socket,setSocket]= useState();
 
            return (
              <BrowserRouter>
              <Routes>
              <Route exact path ="/" element={<Play />}/>
                <Route path ='/card' element={<Card socket={socket}/>}/>
                <Route path ='/selecttrump' element={<TrumpSelect socket={socket} />}/>
                <Route path ='/JoinRoom' element={<JoinRoom setSocket={setSocket}/>}/>
                <Route path ='/CreateRoom' element={<CreateRoom setSocket={setSocket}/>}/>
              </Routes>
              
              </BrowserRouter>
         
 

  );
}


export default App;
