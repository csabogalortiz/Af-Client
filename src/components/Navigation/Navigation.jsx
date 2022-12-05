// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function Navigation() {
//     return (
//         // <>
//         //     <Navbar bg="dark" variant="dark">
//         //         <>
//         //             <Navbar.Brand href="#home">
//         //                 <img
//         //                     alt=""
//         //                     src="https://w7.pngwing.com/pngs/1024/384/png-transparent-black-smiling-emoji-smiley-emoticon-computer-icons-happy-face-icon-face-people-auto-part-thumbnail.png"
//         //                     width="30"
//         //                     height="30"
//         //                     className="d-inline-block align-top"
//         //                 />{' '}
//         //                 Feelings App
//         //             </Navbar.Brand>
//         //         </>
//         //     </Navbar>
//         // </>
//     );
// }

// export default Navigation;

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

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#000">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        🙂AF
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">#Discover</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">Log-Out</CDBSidebarMenuItem>
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
