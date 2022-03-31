import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    

                    <li className="sidebar-item active">
                        <Link className="sidebar-link" to="/Dash">
                            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/Prof">
                            <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/login">
                            <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/Ragister">
                            <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Sign Up</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-blank.html">
                            <i className="align-middle" data-feather="book"></i> <span className="align-middle">Blank</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Tools & Components
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/Subs">
                            <i className="align-middle" data-feather="square"></i> <span className="align-middle">Subscription</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-forms.html">
                            <i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Forms</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-cards.html">
                            <i className="align-middle" data-feather="grid"></i> <span className="align-middle">Cards</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-typography.html">
                            <i className="align-middle" data-feather="align-left"></i> <span className="align-middle">Typography</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="icons-feather.html">
                            <i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Plugins & Addons
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                            <i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
                        </a>
                    </li>
                </ul>

                
            </div>
        </nav>
    )
}

export default Sidebar