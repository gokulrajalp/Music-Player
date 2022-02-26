import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
function App() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" >
        <a class="nav-link active text-success" href="#" >All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-success"  href="#">New Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-success" href="#">Old Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-success" href="#">Album</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-success" href="#">My Music</a>
        </li>
      </ul>
      <form class="d-flex " >
        <input class="form-control me-2 d-none d-md-inline" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success d-none d-md-inline" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="row">
  <div class="col-md-4  bg-primary">
    <div>
    {/* mulu mathi,mudhal nee mudivum nee,oru manam,halamithi habibo;jalabulajangu,natpuku oru kovil,yealae yealae dosthu da;en frienda pola,friendship anthem,gala gala galagang;pallikoodam;engo piranthom */}
    </div>
 
  </div>
  <div class=" col-md-4 bg-primary">
<div>this is
      
    </div>
  </div>
  <div class=" col-md-4  bg-primary">
  <div>
  this is
    </div>
  </div>
</div>
  </div>

  );
}

export default App;
