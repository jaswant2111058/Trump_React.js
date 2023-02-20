import { BrowserRouter, Routes, Route} from "react-router-dom";
import Card from "./Elements/Card/Card";
import TrumpSelect from "./Elements/TrumpSelect/TrumpSelect";
import Header from "./Elements/Header/Hearder"
import './Elements/Card/Card.css'
import './Elements/TrumpSelect/TrumpSelect.css'


function App()
{
            return (
              <BrowserRouter>
              <Routes>
                <Route exact path ="/" element={<Card/>}/>
                <Route path ='/selectTrump' element={<TrumpSelect/>}/>

              </Routes>
              
              </BrowserRouter>
          // <div >
          //  <Header/>
          // <Card/>
          //     <TrumpSelect/>
          // </div>
 

  );
}


export default App;
