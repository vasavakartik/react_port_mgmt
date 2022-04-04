import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle">
                <i className="hamburger align-self-center"></i>
            </a>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                            <div className="position-relative">
                                <i className="align-middle" data-feather="bell"></i>
                                <span className="indicator">4</span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                            <div className="dropdown-menu-header">
                                4 New Notifications
                            </div>
                            <div className="list-group">
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-danger" data-feather="alert-circle"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Update completed</div>
                                            <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                            <div className="text-muted small mt-1">30m ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-warning" data-feather="bell"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Lorem ipsum</div>
                                            <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                            <div className="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-primary" data-feather="home"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Login from 192.186.1.8</div>
                                            <div className="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-success" data-feather="user-plus"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">New connection</div>
                                            <div className="text-muted small mt-1">Christina accepted your request.</div>
                                            <div className="text-muted small mt-1">14h ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-menu-footer">
                                <a href="#" className="text-muted">Show all notifications</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                            <div className="position-relative">
                                <i className="align-middle" data-feather="message-square"></i>
                            </div>
                        </a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                            <i className="align-middle" data-feather="settings"></i>
                        </a>

                        <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                            <img src="adminkit/img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item" to="/Prof"><i className="align-middle me-1" data-feather="user"></i> Profile</Link>
                            <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
                            <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/Logout">Log out</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar