import './App.css';
import { BrowserRouter, Route, Routes, Link ,useParams,Params } from "react-router-dom";
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'

function App() {
  const params =   useParams()

  return (
    <div  >

{/* <Sidebar/> */}

<Routes>
<Route path="/" element={<Profile name={params.id} />}></Route>

        <Route path="/profile/:id" element={<Profile name={params.id} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
