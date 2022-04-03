import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ReactAudioPlayer from 'react-audio-player';
import info from "./audioinfo" 
import { useState } from 'react'
function App() {


const [song , setsong] = useState(info[0]);

function change(n){
  setsong(info[n]);
}



  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light-weight">
        <li className="nav-item  text-success border-bottom border-1 font-weight-light">

        All
        </li>
        <li className="nav-item  text-success">
        New Songs
        </li>
        <li className="nav-item  text-success">
        Old Songs
        </li>
        <li className="nav-item  text-success">
        Album
        </li>
        <li className="nav-item  text-success">
        My Music
        </li>
      </ul>
      <form className="d-flex " >
        <input className="form-control me-2 d-none d-md-inline" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success d-none d-md-inline" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    {/* mulu mathi,mudhal nee mudivum nee,oru manam,halamithi habibo;jalabulajangu,natpuku oru kovil,yealae yealae dosthu da;en frienda pola,
    friendship anthem,gala gala galagang;pallikoodam;engo piranthom */}


<div className="container">
<div className='row'>


{info.map((e)=>{
return <div className="col">
<img src={e.image} alt="Music" onClick={() => change(e.songId)} role="button"/>
  </div>
})}


</div>
</div>



<div className="contailer-fluid player bg-info fixed-bottom">

<ReactAudioPlayer
  src={song.song}
  autoPlay
  controls
/>

</div>


  </div>
  );
}

export default App;