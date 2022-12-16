import './Navigation.css'
import { React, useContext } from 'react'
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';


const SidebarComponent = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const { collapseSidebar, collapsed } = useProSidebar();

    return (
        <Sidebar className="sidebar-content"
            rootStyles={{
                backgroundColor: '#000000 !important',
                minHeight: '100vh',

            }}>
            <CDBSidebarHeader onClick={() => collapseSidebar(!collapsed)} prefix={<i className="d-flex-start sidebar-content fa fa-bars fa-large"></i>}></CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>

                    {user ?
                        <>
                            <NavLink to={`/myprofile`} activeclassname="activeClicked">
                                <CDBSidebarMenuItem> Hey,{!user ? ' invitad@' : user.username}!</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink to="/feed" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Feed</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/Discover" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="info">Discover</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink to="/community" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="th">Community</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/login" target="_blank" activeclassname="activeClicked">
                                <CDBSidebarMenuItem as="div" onClick={logoutUser} icon="exclamation-circle">Log-Out</CDBSidebarMenuItem>
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/login" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Log-in</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/signup" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Sing-up</CDBSidebarMenuItem>
                            </NavLink>



                        </>
                    }

                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    style={{
                        padding: '20px 5px',
                    }}
                >

                </div>
            </CDBSidebarFooter>
        </Sidebar>
    )
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
                                <NavLink to={`/myprofile`} activeclassname="activeClicked">
                                    <CDBSidebarMenuItem> ¡Hola,  {!user ? 'invitad@' : user.username}!</CDBSidebarMenuItem>

                                </NavLink>

                                <NavLink to="/Discover" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">#Discover</CDBSidebarMenuItem>
                                </NavLink>

                                <NavLink to="/community" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Community</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="/feed" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Feed</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="/login" target="_blank" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem as="div" onClick={logoutUser} icon="exclamation-circle">Log-Out ʕ•́ᴥ•̀ʔっ</CDBSidebarMenuItem>
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink to="/login" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Log-in</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="/signup" activeclassname="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Sing-up</CDBSidebarMenuItem>
                                </NavLink>



                            </>
                        }

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
}

export default SidebarComponent;
