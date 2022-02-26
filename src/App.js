import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Button} from 'react-bootstrap'
function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" href="#">All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">New Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Old Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Album</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">My Music</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default App;
