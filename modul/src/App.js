import React from 'react';
import Utama from './Component/utama';
import './App.css'
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
          <ul>
            <li> <Link to="/" class="link">Beranda</Link> </li>
            <li> <Link to="/tentangsaya" class="link">TentangSaya</Link> </li>
            <li> <Link to="/karya" class="link">Karya</Link> </li>
            <li> <Link to="/kontak" class="link">Kontak</Link> <hr /> </li>
          </ul>
          <p><Utama /></p>
      </div>
    );
  }
}

export default App;
