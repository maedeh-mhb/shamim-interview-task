import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingBar from '../appbar/SettingBar';
import NavigationBar from './NavigationBar';


function MainLayout(props) {
    return (
        <div >
            <SettingBar/>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
}

export default MainLayout;