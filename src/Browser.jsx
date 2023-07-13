import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Game from './GameTwoPlayer';
import Home from './Home';
import GameOnePlayer from './GameOnePlayer'
import NotFoundPage from './NotFoundPage'

const Browser = ()=> 
<BrowserRouter basename="/unq-ui-ornella-mendez-trabajo-final">
  <Routes>
    <Route path="/" element={<Home />} index />
    <Route path="/gameOne/:rounds" element={<GameOnePlayer />} />
    <Route path="/gameTwo/:rounds" element={<Game />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</BrowserRouter>


export default Browser ;