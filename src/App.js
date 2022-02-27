import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import mulumathi from "./images/1.jpg"
import muthanee from "./images/muthanee.jpg"
import orumanam from "./images/orumanam.jpg"
import halamithi from "./images/halamithi.jpg"
import penne from "./images/penne.jpg"
import natpu from "./images/natpu.jpg"
import enfriend from "./images/enfriend.jpg"
import antham from "./images/antham.jpg"
import pallikudam from "./images/pallikudam.jpg"
import piranthom from "./images/piranthom.jpg"
import yealae from "./images/yealae.png"
import kalakala from "./images/kala-kala.png"

function App() {
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

  <div className="col">
<img src={mulumathi} alt="Music"/>
  </div>

  <div className="col">
<img src={muthanee}  alt="Music"/>
  </div>

  <div className="col">
<img src={orumanam}  alt="Music"/>
  </div>

  <div className="col">
<img src={halamithi}  alt="Music"/>
  </div>

  <div className="col">
<img src={penne}  alt="Music"/>
  </div>

  <div className="col">
<img src={natpu}  alt="Music"/>
  </div>

  <div className="col">
<img src={yealae}  alt="Music"/>
  </div>

  <div className="col">
<img src={enfriend}  alt="Music"/>
  </div>

  <div className="col">
<img src={antham}  alt="Music"/>
  </div>

  <div className="col">
<img src={kalakala}  alt="Music"/>
  </div>

  <div className="col">
<img src={pallikudam}  alt="Music"/>
  </div>

  <div className="col">
<img src={piranthom}  alt="Music"/>
  </div>

</div>
</div>



<div className="contailer-fluid player bg-info">


</div>


  </div>
  );
}

export default App;