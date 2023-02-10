import { Route, Routes } from 'react-router-dom';
import Chats from '../../pages/Chats';
import Gallery from '../../pages/Gallery';
import HomPage from '../../pages/HomPage';
import Invitation from '../../pages/Invitation';
import Invoice from '../../pages/Invoice';
import Membership from '../../pages/Membership';
import Profile from '../../pages/Profile';
import Setting from '../../pages/Setting';
import MainLayout from './MainLayout';

function Navigation(props) {
    return (
      <Routes>
        <Route path='/' element={<MainLayout/>}>
           <Route path='/' index element={<HomPage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/chats' element={<Chats/>}/>
           <Route path='invitation' element={<Invitation/>}/>
           <Route path='/invoice' element={<Invoice/>}/>
           <Route path='/membership' element={<Membership/>}/>
           <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Route>
      </Routes>  
    );
}

export default Navigation;