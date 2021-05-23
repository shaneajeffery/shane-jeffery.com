import React, { Fragment, ReactElement } from 'react';

const SideMenu = (): ReactElement => {
    return (
        <Fragment>
            <div className="side-menu-open hidden-sm hidden-xs">
                <a href="" className="btn btn-default side-menu-button">
                    <i className="fa fa-bars"></i> MENU
                </a>
            </div>

            <div className="side-menu">
                <span id="side-menu-close">
                    <i className="fa fa-times"></i>
                </span>

                <div className="side-menu-name">
                    John <strong>Rex</strong>
                </div>

                <p className="side-menu-job">Full Stack Engineer</p>

                <nav id="side-menu" className="side-menu-este">
                    <ul className="nav side-menu-nav">
                        <li>
                            <a href="#intro">
                                <i className="fa fa-angle-right"></i> Intro
                            </a>
                        </li>
                        <li>
                            <a href="#education">
                                <i className="fa fa-angle-right"></i> Education
                            </a>
                        </li>
                        <li>
                            <a href="#works">
                                <i className="fa fa-angle-right"></i> Work Experience
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <i className="fa fa-angle-right"></i> Skills
                            </a>
                        </li>
                        <li>
                            <a href="#interests">
                                <i className="fa fa-angle-right"></i> Interests
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio">
                                <i className="fa fa-angle-right"></i> Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <i className="fa fa-angle-right"></i> Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="side-menu-buttons">
                    <a href="#" className="btn btn-side-menu">
                        <i className="fa fa-download"></i> Download my resume
                    </a>
                    <a href="#" className="btn btn-side-menu">
                        <i className="fa fa-envelope-o"></i> Send me a message
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default SideMenu;
