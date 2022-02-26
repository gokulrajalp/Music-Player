import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
        <a className="nav-link active text-success" href="#" >All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-success"  href="#">New Songs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-success" href="#">Old Songs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-success" href="#">Album</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-success" href="#">My Music</a>
        </li>
      </ul>
      <form className="d-flex " >
        <input className="form-control me-2 d-none d-md-inline" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success d-none d-md-inline" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="row">
  <div className="col-md-4  bg-primary">
    <div>
    {/* mulu mathi,mudhal nee mudivum nee,oru manam,halamithi habibo;jalabulajangu,natpuku oru kovil,yealae yealae dosthu da;en frienda pola,friendship anthem,gala gala galagang;pallikoodam;engo piranthom */}
    </div>
 
  </div>
  <div className=" col-md-4 bg-primary">
<div>this is
      
    </div>
  </div>
  <div className=" col-md-4  bg-primary">
  <div>
  this is
    </div>
  </div>
</div>
  </div>
  );
}

export default App;