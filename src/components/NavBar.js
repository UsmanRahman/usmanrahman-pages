import React from 'react';

import '../css/NavBar.css';

import {Link, animateScroll as Scroll} from 'react-scroll';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-list">

                <ul id="nav">
                    <li className="nav-item">
                        <Link activeClass="active"
                              to="homepage"
                              spy={true}
                              smooth={true}
                              offset={-200}
                              duration={1000}>
                        Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link activeClass="active"
                              to="aboutme"
                              spy={true}
                              smooth={true}
                              offset={-175}
                              duration={1000}>
                        About Me</Link>
                    </li>

                    <li className="nav-item">
                    <Link activeClass="active"
                              to="education"
                              spy={true}
                              smooth={true}
                              offset={-175}
                              duration={500}>
                        Education</Link>
                    </li>

                    <li className="nav-item">
                    <Link activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={-175}
                              duration={500}>
                        Contact</Link>
                    </li>
                </ul>

            </div>
        )
    }
}

export default NavBar;