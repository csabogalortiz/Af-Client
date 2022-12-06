import { useContext } from 'react'
import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const Sidebar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    return (
        <div
            className={`app`}
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff"
                backgroundColor="#000"
            >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        🙂AF
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>

                        {user ?
                            <>
                                <NavLink exact to="/login" target="_blank" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem as="div" onClick={logoutUser} icon="exclamation-circle">Log-Out</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">#Discover</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/profile" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink exact to="/login" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Log-in</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/signup" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Sing-up</CDBSidebarMenuItem>
                                </NavLink>


                            </>
                        }
                        <NavLink exact to="/" activeclassname="activeClicked">
                            <CDBSidebarMenuItem>¡Hola, {!user ? 'invitad@' : user.username}!</CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Footer Aqui
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
