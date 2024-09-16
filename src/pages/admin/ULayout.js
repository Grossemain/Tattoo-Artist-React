import React from 'react';
import { Outlet } from 'react-router-dom';

import './admin.css'

import Header from '../../components/admin/Header'

import UserAccountSideMenu from '../../components/admin/UserAccount/UserAccountSideMenu'



const ULayout = () => {
    return (
        <div className="ALayout">
            <Header/>
            <div id="admin">
                <UserAccountSideMenu/>
                <div id="admin_body"><Outlet/></div>
            </div>
        </div>
    );
};

export default ULayout;