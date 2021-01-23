import React from 'react';
import Utama from './Component/utama';
import './App.css'
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
        <div>
        <nav class="navbar navbar-dark bg-primary navbar-expand-md py-md-2">
            <h1 class="navbar-brand">MENU</h1>
            <div class="navbar-collapse collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item py-md-2">
                        <Link to="/" class="nav-link">Beranda</Link>
                    </li>
                    <li class="nav-item py-md-2">
                        <Link to="/tentangsaya" class="nav-link">TentangSaya</Link>
                    </li>
                    <li class="nav-item py-md-2">
                        <Link to="/karya" class="nav-link">Karya</Link>
                    </li>
                    <li class="nav-item py-md-2">
                        <Link to="/kontak" class="nav-link">Kontak</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="cointainer-fluid">
            <div class="row">
                <div class="col"><Utama /></div>
            </div>
        </div>
        </div>
    );
  }
}

export default App;