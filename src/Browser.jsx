import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Game from './Game';
import Home from './Home';
import NotFoundPage from './NotFoundPage'

const Browser = ()=> 
<BrowserRouter> 
   <Routes>
     <Route path="/">
       <Route index element={<Home/>} />
       <Route path="/game/:isOnePlayer" element={<Game/>} />
       <Route path="*" element={<NotFoundPage/>} />
     </Route>
   </Routes>
 </BrowserRouter>

export default Browser ;