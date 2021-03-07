import React from 'react';
import '../css/TestNavBar.css';

import {Link, animateScroll as Scroll} from 'react-scroll';
import { Navbar } from 'react-bootstrap';

class TestNavBar extends React.Component {
    render() {
        return (
            
            <div className="navigation">
                <Navbar bg="dark" expand="lg">
                    
                    <Navbar.Text className="nav-item">
                        <Link activeClass="active"
                              to="homepage"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={1000}>
                        Home</Link>
                    </Navbar.Text>

                    <Navbar.Text className="nav-item">
                        <Link activeClass="active"
                              to="aboutme"
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={1000}>
                        About Me</Link>
                    </Navbar.Text>

                    <Navbar.Text className="nav-item">
                        <Link activeClass="active"
                              to="education"
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}>
                        Education</Link>
                    </Navbar.Text>

                    <Navbar.Text className="nav-item">
                        <Link activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}>
                        Contact Me</Link>
                    </Navbar.Text>
                            
                </Navbar>
            </div>
        )
    }
}
export default TestNavBar;