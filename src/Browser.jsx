import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Game from './Game';
import Home from './Home';
import GameOnePlayer from './GameOnePlayer'
import NotFoundPage from './NotFoundPage'

const Browser = ()=> 
<BrowserRouter> 
   <Routes basename={'/unq-ui-ornella-mendez-trabajo-final'}>
     <Route path="/">
       <Route index element={<Home/>} />
       <Route path="/gameOne/:rounds" element={<GameOnePlayer/>} />
       <Route path="/gameTwo/:rounds" element={<Game/>} />
       <Route path="*" element={<NotFoundPage/>} />
     </Route>
   </Routes>
 </BrowserRouter>

export default Browser ;