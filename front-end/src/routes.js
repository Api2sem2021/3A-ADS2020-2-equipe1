import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/About/index';
import Options from './pages/Options/index';
import Home from './pages/Home/index';
import NotFound from './pages/NotFound';
import Shapefile from './pages/Shapefile/index';
import Postgresql from './pages/Postgresql/index';
import Handle from './pages/Handle/index';


const Routes = () => (
    <BrowserRouter>
        <Switch>
           
            <Route path="/about" component={About} />
            <Route path="/options" component={Options} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/shapefile" component={Shapefile} />
            <Route path="/postgresql" component={Postgresql} />
            <Route path="/handle" component={Handle} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;