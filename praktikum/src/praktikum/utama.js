import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Galeri from './galeri';
import HariBesar from './haribesar';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/haribesar" component={HariBesar} />
    </Switch>
)

export default Utama;
