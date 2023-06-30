import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Game from './Game';
import Home from './Home';
import GameOnePlayer from './GameOnePlayer'
import NotFoundPage from './NotFoundPage'

const Browser = ()=> 
<BrowserRouter> 
   <Routes basename={'/unq-ui-ornella-mendez-trabajo-final'}>
     {/* <Route path="/">
       <Route index element={<Home/>} />
       <Route path="/gameOne" element={<GameOnePlayer/>} />
       <Route path="/gameTwo" element={<Game/>} />
       <Route path="*" element={<NotFoundPage/>} />
     </Route> */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
        <Route path={`${process.env.PUBLIC_URL}/gameOne`} element={<GameOnePlayer/>}/>
        <Route path={`${process.env.PUBLIC_URL}/gameTwo`} element={<Game />}/>
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFoundPage />} />
   </Routes>
 </BrowserRouter>

export default Browser ;