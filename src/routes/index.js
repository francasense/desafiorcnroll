import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StyledGlobal from '../styles/global';

import Main from '../pages/main';
import Dadosartista from '../pages/dadosartista';
import Albums from '../pages/albums';
import Musicas from '../pages/musicas';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/dadosartista/:artist" component={Dadosartista} />
            <Route path="/albums/:artist" component={Albums} />
            <Route path="/musicas/:artist" component={Musicas} />



        </Switch>
         <StyledGlobal />
        
    </BrowserRouter>
    
);

export default Routes;