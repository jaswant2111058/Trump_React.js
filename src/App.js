 import { BrowserRouter, Routes, Route} from "react-router-dom";
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
{   
 
            return (
              <BrowserRouter>
              <Routes>
              <Route exact path ="/" element={<Play />}></Route>
                <Route exact path ='/card' element={<Card/>}></Route>
                <Route exact path ='/selecttrump' element={<TrumpSelect/>}></Route>
                <Route exact path ='/JoinRoom' element={<JoinRoom />}></Route>
                <Route exact path ='/CreateRoom' element={<CreateRoom />}></Route>
              </Routes>
              </BrowserRouter>
  );

}


export default App;
