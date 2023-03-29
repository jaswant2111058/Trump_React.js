 import { BrowserRouter,HashRouter, Routes, Route} from "react-router-dom";
import Card from "./Elements/Card/Card";
import Play from "./Elements/Play/Play";
import CreateRoom from "./Elements/CreateRoom/CreateRoom";
import JoinRoom from "./Elements/JoinRoom/JoinRoom";
import TrumpSelect from "./Elements/TrumpSelect/TrumpSelect";
import './Elements/Card/Card.css'
import './Elements/Play/Play.css'
import './Elements/TrumpSelect/TrumpSelect.css'
import './Elements/CreateRoom/CreateRoom.css'
            

function App()
{   
 
            return (
              <HashRouter>
              <Routes>
              <Route  path ="/" element={<Play />}></Route>
              <Route  path ="/play" element={<Play/>}></Route>
                <Route path ='/card' element={<Card/>}></Route>
                <Route  path ='/selecttrump' element={<TrumpSelect/>}/>
                <Route  path ='/JoinRoom' element={<JoinRoom />}/>
                <Route  path ='/CreateRoom' element={<CreateRoom />}/>
              </Routes>
              </HashRouter>
  );

}


export default App;
